import Card from "@/components/Card";
import Coinstack from "@/icons/coinstack";
import Multiply from "@/icons/multiply";
import React from "react";

type Props = {};

const Overview = (props: Props) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 mt-10">
        <Card
          title="Total Revenue Generated"
          value="$59,786,231"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Coinstack height={20} width={20} color="#667085" />}
        />
        <Card
          title="Total Revenue Generated"
          value="N59,786,231"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Coinstack height={20} width={20} color="#667085" />}
        />{" "}
        <Card
          title="Total Credits"
          value="5,986,231"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Coinstack height={20} width={20} color="#667085" />}
        />{" "}
        <Card
          title="Avg. Credit Balance "
          value="148,790"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Coinstack height={20} width={20} color="#667085" />}
        />
      </div>
    </div>
  );
};

export default Overview;
