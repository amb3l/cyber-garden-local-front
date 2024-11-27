import { Button, IconButton, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import BalanceEditPopper from "./BalanceEditPopper";
import React from "react";
import { useState } from "react";

export const TransactionsMenu = () => {
  const [balanceValue, setBalanceValue] = useState("10000.55");
  const [incomeValue, setIncomeValue] = useState("20202.123");
  const [outcomeValue, setOutcomeValue] = useState("202.123");
  const [showBalance, setShowBalance] = useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const toggleBalanceEditPopper = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const handleToggle = () => {
    setShowBalance((prev) => !prev);
  };

  const handleEditBalance = (event) => {
    toggleBalanceEditPopper(event);
  };

  const handleClosePopper = (event) => {
    setOpen((prev) => !prev);
  };

  const handleEditBalanceSubmit = (newValue) => {
    console.log("balance changed");
    setBalanceValue(newValue);
    setOpen((prev) => !prev);
  };

  return (
    <Grid2
      container
      spacing={2}
      direction={"column"}
      sx={{ padding: 2 }}
      width={"400px"}
    >
      <BalanceEditPopper
        open={open}
        anchorEl={anchorEl}
        balanceValue={balanceValue}
        handleCancel={handleClosePopper}
        handleSubmit={handleEditBalanceSubmit}
      />

      <Grid2 sx={{ pl: 2 }}>
        <Typography variant="h5" fontWeight={600}>
          Журнал транзакций
        </Typography>
      </Grid2>

      {/* Balance */}
      <ListGridItem>
        <Typography variant="caption" fontWeight={600}>
          Баланс
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "1rem",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography variant="h4" fontWeight={600}>
              {(showBalance ? balanceValue : "••••") + " ₽"}
            </Typography>
          </Box>

          <Box>
            <IconButton onClick={handleEditBalance}>
              <EditRoundedIcon />
            </IconButton>
            <IconButton onClick={handleToggle}>
              <VisibilityOffRoundedIcon />
            </IconButton>
          </Box>
        </Box>
      </ListGridItem>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            minWidth: "175px",
            width: "100%",
            display: "block",
            maxWidth: "100",
            alignItems: "center",
          }}
        >
          <ListGridItem>
            <Box display={"flex"} alignItems={"center"}>
              <Typography variant="caption" fontWeight={600}>
                Доходы месяца
              </Typography>
              <ArrowDropUpRoundedIcon sx={{ color: "#1ABB40" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                mt: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {(showBalance ? incomeValue : "•••") + " ₽"}
                </Typography>
              </Box>
            </Box>
          </ListGridItem>
        </Box>

        <Box sx={{ minWidth: "175px", width: "100%", display: "block" }}>
          <ListGridItem>
            <Box display={"flex"} alignItems={"center"}>
              <Typography variant="caption" fontWeight={600}>
                Расходы
              </Typography>
              <ArrowDropDownRoundedIcon sx={{ color: "#CA0000" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                mt: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {(showBalance ? outcomeValue : "•••") + " ₽"}
                </Typography>
              </Box>
            </Box>
          </ListGridItem>
        </Box>
      </Box>

      <ListGridItem>
        <Button
          fullWidth
          variant="text"
          // onClick={() => navigate('/services')}
          sx={[
            {
              borderRadius: 2,
              color: "black",
              textTransform: "none",
            },
          ]}
        >
          <Typography>Добавить операцию</Typography>
        </Button>
      </ListGridItem>

      <ListGridItem>
        <Button
          fullWidth
          variant="text"
          // onClick={() => navigate('/services')}
          sx={[
            {
              borderRadius: 2,
              color: "black",
              textTransform: "none",
            },
          ]}
        >
          <Typography>Добавить плановую операцию</Typography>
        </Button>
      </ListGridItem>
    </Grid2>
  );
};

const ListGridItem = ({ children }) => {
  return (
    <Grid2>
      <Paper sx={{ px: 2, py: 1 }}>{children}</Paper>
    </Grid2>
  );
};
