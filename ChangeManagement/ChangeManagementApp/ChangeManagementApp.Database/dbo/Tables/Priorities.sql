CREATE TABLE [dbo].[Priorities] (
    [Id]       INT            IDENTITY (1, 1) NOT NULL,
    [Priority] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_Priorities] PRIMARY KEY CLUSTERED ([Id] ASC)
);


