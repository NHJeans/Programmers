-- 코드를 입력하세요
SELECT COUNT(*) as USERS
from user_info
where AGE >= 20 AND AGE <= 29
and joined between '2021-01-01' and '2021-12-31' 