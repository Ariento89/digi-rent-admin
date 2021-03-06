import TenantsActiveAbsoluteValueIndicator from "../../core/indicators/TenantsActiveAbsoluteValueIndicator";
import TenantsRegisteredAbsoluteValueIndicator from "../../core/indicators/TenantsRegisteredAbsoluteValueIndicator";
import TenantsAgeChartIndicator from "../../core/indicators/TenantsAgeChartIndicator";
import TenantsGenderChartIndicator from "../../core/indicators/TenantsGenderChartIndicator";
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
import { getTenants } from "../../services/usersService";
import AsyncScreen from "../../core/layout/AsyncScreen";
import {
  getActiveTenants,
  getRegisteredTenants,
  getTenantsByAge,
  getTenantsByGender,
} from "../../utils/tenantsIndicators";
import TenantsApplicationsAbsoluteValueIndicator from "../../core/indicators/TenantsApplicationsAbsoluteValueIndicator";
import { getApplications } from "../../services/applicationsService";
import { getTotalApplications } from "../../utils/applicationsIndicators";
import { startCase } from "lodash";
import TenantsFilter from "./TenantsFilter";
import Button from "../../core/form/Button";
import { BLUE_1, GREY_6, RED_1 } from "../../consts/colors";

export default function TenantsScene() {
  const notify = useNotification();
  const [tenants, setTenants] = useState([]);
  const [applications, setApplications] = useState([]);

  const [isFetchingTenants, loadTenants] = useService(getTenants, {
    onData: ({ data }) => setTenants(data),
    onError: (error) => notify(error.text, "warning"),
  });

  const [isFetchingApplications, loadApplications] = useService(getApplications, {
    onData: ({ data }) => setApplications(data),
    onError: (error) => notify(error.text, "warning"),
  });

  useEffect(() => {
    loadTenants();
    loadApplications();
  }, []);

  return (
    <div>
      <Row>
        <Column size={6}>
          <Row>
            <Column size={6}>
              <TenantsActiveAbsoluteValueIndicator
                value={getActiveTenants(tenants)}
                isLoading={isFetchingTenants}
                size="sm"
              />
            </Column>
            <Column size={6}>
              <TenantsRegisteredAbsoluteValueIndicator
                value={getRegisteredTenants(tenants)}
                isLoading={isFetchingTenants}
                size="sm"
              />
            </Column>
          </Row>
          <Row>
            <TenantsApplicationsAbsoluteValueIndicator
              value={getTotalApplications(applications)}
              isLoading={isFetchingApplications}
              size="sm"
            />
          </Row>
        </Column>
        <Column size={6}>
          <Row>
            <Column size={6}>
              <TenantsAgeChartIndicator values={getTenantsByAge(tenants)} isLoading={isFetchingTenants} size="sm" />
            </Column>
            <Column size={6}>
              <TenantsGenderChartIndicator
                values={getTenantsByGender(tenants)}
                isLoading={isFetchingTenants}
                size="sm"
              />
            </Column>
          </Row>
        </Column>
      </Row>
      <Separator size="md" />
      <Row alignItems="center" justifyContent="space-between">
        <PageTitle title="Tenants List" />
        <TenantsFilter />
      </Row>
      <Row>
        <Card>
          <AsyncScreen isLoading={isFetchingTenants}>
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
              data={tenants}
            />
          </AsyncScreen>
        </Card>
      </Row>
    </div>
  );
}
