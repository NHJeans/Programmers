-- 코드를 입력하세요
SELECT a.flavor from first_half a
inner join icecream_info b on a.flavor = b.flavor
where a.total_order > 3000
and b.INGREDIENT_TYPE = 'fruit_based'