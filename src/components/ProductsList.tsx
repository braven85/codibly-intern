import { Box, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import productsApi from '../api/productsApi';
import { RootState } from '../redux/store';
import InfoModal from './InfoModal';

const ProductsList = () => {
  const [products, setProducts] = useState<any>([]);
  const [pageSize, setPageSize] = useState(5);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [infoModalData, setInfoModalData] = useState([]);
  const [error, setError] = useState();

  const { filter } = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await productsApi.getAll();
        setProducts(res.data);
      } catch (err: any) {
        console.log(err);
        setError(err);
      }
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter(
    (product: { id: number }) => product.id === filter
  );

  const columnsData = [
    {
      field: 'id',
      headerName: 'Id',
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'year',
      headerName: 'Year',
      flex: 1,
    },
  ];

  const handlePageChange = useCallback(() => {
    setPageSize(pageSize);
  }, [pageSize]);

  const rowClassNameHandler = useCallback((params: any) => {
    return `${params.row.name}`;
  }, []);

  const rowClickHandler = useCallback((params: any) => {
    setShowInfoModal(true);
    setInfoModalData(params.row);
  }, []);

  return (
    <>
      {error && (
        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
        >
          <Typography color="error">{error}</Typography>
        </Box>
      )}
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <Paper
          elevation={10}
          sx={{
            width: '80%',
            '& .cerulean': {
              bgcolor: '#98B2D1',
            },
            '& .fuchsia': {
              bgcolor: '#C74375',
            },
            '& .true': {
              bgcolor: '#BF1932',
            },
            '& .aqua': {
              bgcolor: '#7BC4C4',
            },
            '& .tigerlily': {
              bgcolor: '#E2583E',
            },
            '& .turquoise': {
              bgcolor: '#53B0AE',
            },
          }}
        >
          <DataGrid
            autoHeight
            rows={filter !== 0 ? filteredProducts : products}
            columns={columnsData}
            pageSize={pageSize}
            rowsPerPageOptions={[5]}
            onPageChange={handlePageChange}
            density="standard"
            showColumnRightBorder
            showCellRightBorder
            disableSelectionOnClick
            onRowClick={rowClickHandler}
            getRowClassName={rowClassNameHandler}
          />
        </Paper>
        <InfoModal
          open={showInfoModal}
          onClose={() => setShowInfoModal(false)}
          data={infoModalData}
        />
      </Box>
    </>
  );
};

export default ProductsList;
