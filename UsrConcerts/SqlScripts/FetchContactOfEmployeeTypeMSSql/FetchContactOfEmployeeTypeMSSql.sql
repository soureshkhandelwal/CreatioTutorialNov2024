create or alter view UsrViewContactOfEmployeeType
as
select c.Id as UsrId, c.Name as UsrName from Contact c
join ContactType ct on c.TypeId = ct.Id
where ct.Name= 'Employee'