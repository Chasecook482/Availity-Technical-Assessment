CREATE TABLE [dbo].[Order]
(
	[OrderID] INT NOT NULL PRIMARY KEY, 
    [CustomerID] INT NULL, 
    [OrderDate] DATE NULL, 
    CONSTRAINT [CustomerID] FOREIGN KEY ([CustomerID]) REFERENCES [Customer]([CustID])
)
