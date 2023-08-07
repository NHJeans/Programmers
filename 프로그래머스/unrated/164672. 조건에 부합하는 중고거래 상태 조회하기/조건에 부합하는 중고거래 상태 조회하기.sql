-- 코드를 입력하세요
SELECT BOARD_ID, WRITER_ID, TITLE, PRICE,
       CASE 
           WHEN STATUS = 'sale' THEN '판매중'
           WHEN STATUS = 'DONE' THEN '거래완료'
           ELSE '예약중'
       END AS STATUS
FROM used_goods_board
WHERE CREATED_DATE = '2022-10-05'
order by BOARD_ID desc
