import Stack from "@mui/material/Stack";
import "./App.css";
import Box from "@mui/material/Box";
// import HorizontalNav from "./Components/AppBar/HorizontalNav";
import VerticalNav from "./Components/AppBar/VerticalNav";
import CartSummary from "./Pages/CartSummary";
import PaymentSummary from "./Pages/PaymentSummary";

function App() {
  return (
    <Box>
      {/* <HorizontalNav /> */}
      <Box display="flex" width="100%" height="100vh">
        <Box
          sx={{ width: "100px", backgroundColor: "#0a3e66" }}
          position={"sticky"}
        >
          <VerticalNav />
        </Box>
        <Box
          display="flex"
          flex={1}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box sx={{ flex: 2 }}>
            <CartSummary />
          </Box>
          <Box sx={{ flex: 4, maxWidth: "600px", backgroundColor: "#e0e0e0" }}>
            <PaymentSummary />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
