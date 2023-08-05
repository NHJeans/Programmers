-- 코드를 입력하세요
SELECT bo.title, 
       bo.BOARD_ID, 
       re.Reply_id, 
       re.writer_id, 
       re.contents, 
       date_format(re.created_date, '%Y-%m-%d') as CREATED_DATE 
from used_goods_board bo
inner join 
       used_goods_reply re on 
       bo.board_id = re.board_id
where bo.created_date like ('2022-10%')
order by re.CREATED_DATE, bo.TITLE