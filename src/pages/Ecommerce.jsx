import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
// import { GoPrimitiveDot } from "react-icons/go";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, LineChart, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  ecomPieChartData,
} from "../data/dummy";

import product9 from "../data/product9.jpg";

const DropDown = ({ currMode }) => {
  <div>
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currMode === "Dark" && "White" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>;
};

const Ecommerce = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-self-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between"></div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
