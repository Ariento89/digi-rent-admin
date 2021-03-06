import LandlordsActiveAbsoluteValueIndicator from "../../core/indicators/LandlordsActiveAbsoluteValueIndicator";
import LandlordsRegisteredAbsoluteValueIndicator from "../../core/indicators/LandlordsRegisteredAbsoluteValueIndicator";
import LandlordsAgeChartIndicator from "../../core/indicators/LandlordsAgeChartIndicator";
import LandlordsGenderChartIndicator from "../../core/indicators/LandlordsGenderChartIndicator";
import Column from "../../core/layout/Column";
import Row from "../../core/layout/Row";
import PageTitle from "../../core/layout/PageTitle";
import Separator from "../../core/layout/Separator";
import Card from "../../core/layout/Card";
import Table from "../../core/layout/Table";
import Badge from "../../core/layout/Badge";
import useService from "../../hooks/useService";
import { useEffect, useState } from "react";
import useNotification from "../../hooks/useNotification";
import { getLandlords } from "../../services/usersService";
import AsyncScreen from "../../core/layout/AsyncScreen";
import {
  getActiveLandlords,
  getLandlordsByAge,
  getLandlordsByGender,
  getRegisteredLandlords,
} from "../../utils/landlordsIndicators";
import { startCase } from "lodash";
import LandlordsFilter from "./LandlordsFilter";
import Button from "../../core/form/Button";
import { BLUE_1, GREY_6, RED_1 } from "../../consts/colors";

export default function LandlordsScene() {
  const notify = useNotification();
  const [landlords, setLandlords] = useState([]);
  const [isFetching, loadLandlords] = useService(getLandlords, {
    onData: ({ data }) => setLandlords(data),
    onError: (error) => notify(error.text, "warning"),
  });

  useEffect(() => {
    loadLandlords();
  }, []);

  return (
    <div>
      <Row>
        <Column size={3}>
          <LandlordsActiveAbsoluteValueIndicator
            value={getActiveLandlords(landlords)}
            isLoading={isFetching}
            size="lg"
          />
        </Column>
        <Column size={3}>
          <LandlordsRegisteredAbsoluteValueIndicator
            value={getRegisteredLandlords(landlords)}
            isLoading={isFetching}
            size="lg"
          />
        </Column>
        <Column size={3}>
          <LandlordsAgeChartIndicator values={getLandlordsByAge(landlords)} isLoading={isFetching} size="sm" />
        </Column>
        <Column size={3}>
          <LandlordsGenderChartIndicator values={getLandlordsByGender(landlords)} isLoading={isFetching} size="sm" />
        </Column>
      </Row>
      <Separator size="md" />
      <Row alignItems="center" justifyContent="space-between">
        <PageTitle title="Landlords List" />
        <LandlordsFilter />
      </Row>
      <Row>
        <Card>
          <AsyncScreen isLoading={isFetching}>
            <Table
              columns={[
                {
                  accessor: "checkbox",
                  width: "5%",
                  textAlign: "center",
                  Header: (props) => <input type="checkbox" />,
                  Cell: (props) => <input type="checkbox" />,
                },
                {
                  accessor: "id",
                  Header: "ID",
                  width: "5%",
                  Cell: (props) => <b style={{ fontFamily: "GothamBold", color: "#000" }}>{props.value}</b>,
                },
                {
                  accessor: "firstName",
                  Header: "First Name",
                  width: "20%",
                },
                {
                  accessor: "lastName",
                  Header: "Last Name",
                  width: "20%",
                },
                {
                  accessor: "city",
                  Header: "Location",
                  width: "15%",
                },
                {
                  accessor: "status",
                  Header: "Status",
                  width: "10%",
                  Cell: (props) => (
                    <Badge label={startCase(props.value)} status={props.value === "active" ? "success" : "error"} />
                  ),
                },
                {
                  accessor: "action",
                  Header: "Action",
                  width: "15%",
                  Cell: (props) => (
                    <div style={{ display: "flex" }}>
                      <Button icon="edit" fontColor={GREY_6} iconSize="md" label="Edit" />
                      <Button icon="remove" iconColor={RED_1} fontColor={GREY_6} iconSize="md" label="Delete" />
                      <Button fontColor={BLUE_1} iconSize="md" label="Details" />
                    </div>
                  ),
                },
              ]}
              data={landlords}
            />
          </AsyncScreen>
        </Card>
      </Row>
    </div>
  );
}
