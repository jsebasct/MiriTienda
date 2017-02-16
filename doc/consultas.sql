SELECT `product`.`product_id`,
    `product`.`product_name`,
    `product`.`product_unit_sale_price`,
    `product`.`product_bar_code`,
    `product`.`product_real_price`
FROM `miristore`.`product`;

INSERT INTO `miristore`.`product`
(
`product_name`,
`product_unit_sale_price`,
`product_bar_code`,
`product_real_price`)
VALUES
(
'jabon',
25.12,
'abc001',
20.00);
