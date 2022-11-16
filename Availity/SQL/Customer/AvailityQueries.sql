--Question A
SELECT * FROM Customer WHERE LastName LIKE 'S%' ORDER BY FirstName DESC;


--Question B
SELECT Customer.FirstName, Customer.LastName, 
SUM(CASE WHEN OrderDate BETWEEN DATEADD(MM, -6, GETDATE()) AND GETDATE() THEN OrderLine.Cost * OrderLine.Quantity ELSE 0 END) AS total
FROM Customer
FULL OUTER JOIN [Order] ON [Order].CustomerID = Customer.CustID
FULL OUTER JOIN OrderLine ON [Order].OrderID = OrderLine.OrdID
GROUP BY Customer.FirstName, Customer.LastName
ORDER BY total;

--Question C
SELECT Customer.FirstName, Customer.LastName, SUM(OrderLine.Cost * OrderLine.Quantity) AS total
FROM Customer
FULL OUTER JOIN [Order] ON [Order].CustomerID = Customer.CustID
FULL OUTER JOIN OrderLine ON [Order].OrderID = OrderLine.OrdID
WHERE OrderDate BETWEEN DATEADD(MM, -6, GETDATE()) AND GETDATE()
GROUP BY Customer.FirstName, Customer.LastName
HAVING 500 > Sum(OrderLine.Cost * OrderLine.Quantity) AND  Sum(OrderLine.Cost * OrderLine.Quantity) > 100
ORDER BY total;