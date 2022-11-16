CREATE TABLE [dbo].[OrderLine]
(
	[OrderLineID] INT NOT NULL PRIMARY KEY, 
    [OrdID] INT NULL, 
    [ItemName] CHAR(255) NULL, 
    [Cost] INT NULL, 
    [Quantity] INT NULL, 
    CONSTRAINT [OrderID] FOREIGN KEY ([OrdID]) REFERENCES [Order]([OrderID])
)
