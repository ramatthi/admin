import React, { useState } from 'react';
import {
  Table,
  TableColumn,
} from '@backstage/core-components';
import { Button, TextField, Breadcrumbs, Link } from '@material-ui/core';

type RidePricing = {
  id: number;
  vehicleType: string;
  baseKms: number;
  baseRateDay: number;
  baseRateNight: number;
  perKmsDay: number;
  perKmsNight: number;
};

type DenseTableProps = {
  pricing: RidePricing[];
};

const DenseTable: React.FC<DenseTableProps> = ({ pricing }) => {
  const [data, setData] = useState<RidePricing[]>(pricing);

  const columns: TableColumn<RidePricing>[] = [
    { title: 'Vehicle Type', field: 'vehicleType' },
    { title: 'Base KMS', field: 'baseKms' },
    { title: 'Base Rate - Day Time (INR)', field: 'baseRateDay' },
    { title: 'Base Rate - Night Time (INR)', field: 'baseRateNight' },
    { title: 'Per KMS - Day Time (INR)', field: 'perKmsDay' },
    { title: 'Per KMS - Night Time (INR)', field: 'perKmsNight' },
  ];

  return (
    <div>
      <Table
        options={{ search: false, paging: true, sorting: false }}
        columns={columns}
        data={data}
        style={{ backgroundColor: '#f9f9f9', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} 
      />
    </div>
  );
};

const FlatComponent: React.FC = () => {
  const initialPricing: RidePricing[] = [
    // Sample data
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    // Add more sample data as needed

    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
    { id: 1, vehicleType: 'Car', baseKms: 10, baseRateDay: 500, baseRateNight: 600, perKmsDay: 15, perKmsNight: 18 },
  ];

  return <DenseTable pricing={initialPricing} />;
};

export default FlatComponent;
