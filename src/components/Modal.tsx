import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { fetchProduct } from '../http/product';
import { async } from 'q';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ProductModal({ open, setOpen, handleOpen, handleClose, product }: any) {

    console.log("product",product)
    //   const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    React.useEffect(() => {
        if(product){

            (async () => {
                const { data } = await fetchProduct(product)
                console.log("data", data)
            })()
        }

    }, [product])


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {/* {product?.title} */}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* {product.description} */}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
