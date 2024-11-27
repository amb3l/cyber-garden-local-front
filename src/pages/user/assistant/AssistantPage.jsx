import { MainHeader } from "../../../shared/headers/MainHeader";
import { PageContentWrapper } from "../../PageContentWrapper";
import Box from "@mui/material/Box";
import { AssistantTable } from "./AssistantTable";
import { TransactionsMenu } from "./TransactionsMenu";

export const AssistantPage = () => {
  return (
    <div>
      <MainHeader />

      <PageContentWrapper>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
          <TransactionsMenu />

          <Box sx={{ flexGrow: 1, mt: 8 }}>
            <AssistantTable />
          </Box>
        </Box>
      </PageContentWrapper>
    </div>
  );
};
