create or alter view UsrViewContactAgeDays
as
select Id as UsrId, Name as UsrName, BirthDate as UsrBirthDate,
DATEDIFF(day, BirthDate, GETDATE()) as UsrAgeDays
from Contact