DROP VIEW IF EXISTS "UsrViewContactOfEmployeeType";

CREATE VIEW "UsrViewContactOfEmployeeType" AS
SELECT 
    c."Id" AS "UsrId", 
    c."Name" AS "UsrName"
FROM 
    "Contact" c
JOIN 
    "ContactType" ct 
ON 
    c."TypeId" = ct."Id"
WHERE 
    ct."Name" = 'Employee';