﻿CREATE TABLE [dbo].[UserTypes] (
    [Id]   INT            IDENTITY (1, 1) NOT NULL,
    [Type] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_UserTypes] PRIMARY KEY CLUSTERED ([Id] ASC)
);

