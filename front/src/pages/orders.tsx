import * as React from 'react';
import {useState} from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField
} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export default function OrdersPage() {

    function createData(
        tradeId: string,
        pinNumber: string,
        pinStatus: string,
        goodsName: string,
        price: number,
        telNumber: string,
    ) {
        return {tradeId, pinNumber, pinStatus, goodsName, price, telNumber};
    }

    const rows = [
        createData('11112222333344445555', 'aaabbbcccddddeeeefff', '사용중', '문화상품권', 50000, '01011112222'),
        createData('11112222333344445555', 'aaabbbcccddddeeeefff', '사용중', '문화상품권', 50000, '01011112222'),
        createData('11112222333344445555', 'aaabbbcccddddeeeefff', '사용중', '문화상품권', 50000, '01011112222'),
        createData('11112222333344445555', 'aaabbbcccddddeeeefff', '사용중', '문화상품권', 50000, '01011112222'),
        createData('11112222333344445555', 'aaabbbcccddddeeeefff', '사용중', '문화상품권', 50000, '01011112222'),
        createData('11112222333344445555', 'aaabbbcccddddeeeefff', '사용중', '문화상품권', 50000, '01011112222'),
        createData('11112222333344445555', 'aaabbbcccddddeeeefff', '사용중', '문화상품권', 50000, '01011112222'),
        createData('11112222333344445555', 'aaabbbcccddddeeeefff', '사용중', '문화상품권', 50000, '01011112222'),
        createData('11112222333344445555', 'aaabbbcccddddeeeefff', '사용중', '문화상품권', 50000, '01011112222'),
    ];

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DatePicker
                        label="시작일"
                        value={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                        format="YYYY-MM-DD"
                    />
                    <DatePicker
                        label="종료일"
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue)}
                        format="YYYY-MM-DD"
                    />
                </DemoContainer>
            </LocalizationProvider>
            <div>
                <TextField id="outlined-basic" label="주문번호" variant="outlined"/>
                <TextField id="outlined-basic" label="핀번호" variant="outlined"/>
                <TextField id="outlined-basic" label="핀상태" variant="outlined"/>
                <TextField id="outlined-basic" label="수신자번호" variant="outlined"/>
            </div>
            <Paper >

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{minWidth: 150}}>주문번호</TableCell>
                                <TableCell style={{minWidth: 150}}>핀번호</TableCell>
                                <TableCell style={{minWidth: 150}}>핀상태</TableCell>
                                <TableCell style={{minWidth: 150}}>상품명</TableCell>
                                <TableCell style={{minWidth: 150}}>구매 가격</TableCell>
                                <TableCell style={{minWidth: 150}}>수신자 번호</TableCell>
                                <TableCell style={{minWidth: 150}}>수신자 번호</TableCell>
                                <TableCell style={{minWidth: 150}}>수신자 번호</TableCell>
                                <TableCell style={{minWidth: 150}}>수신자 번호</TableCell>
                                <TableCell style={{minWidth: 150}}>수신자 번호</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.tradeId}</TableCell>
                                    <TableCell> {row.pinNumber}</TableCell>
                                    <TableCell>{row.pinStatus}</TableCell>
                                    <TableCell>{row.goodsName}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.telNumber}</TableCell>
                                    <TableCell>{row.telNumber}</TableCell>
                                    <TableCell>{row.telNumber}</TableCell>
                                    <TableCell>{row.telNumber}</TableCell>
                                    <TableCell>{row.telNumber}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[10, 25, 100]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}
