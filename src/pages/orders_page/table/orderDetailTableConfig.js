import numberFormatter from "../../../utilities/numberFormatter"

export const columns = [
  {
    dataIndex: ['product', 'code'],
    key: 'productCode',
    title: 'Product Code',
    width: 20,
    fixed: 'left',
  },
  {
    dataIndex: ['product', 'name'],
    key: 'productName',
    title: 'Product Name',
    width: 40,
  },
  {
    dataIndex: ['product', 'category'],
    key: 'productCategory',
    title: 'Product Category',
    width: 30,
  },
  {
    dataIndex: ['product', 'price'],
    key: 'productPrice',
    title: 'Product Price',
    render: (text) => numberFormatter(Number(text)),
    width: 25,
  },
  {
    dataIndex: 'qty',
    key: 'quantity',
    title: 'Quantity',
    width: 15,
  },
  {
    dataIndex: 'total_price',
    key: 'totalPrice',
    title: 'Total Price',
    width: 25,
    render: (text) => numberFormatter(Number(text)),
  },
]
