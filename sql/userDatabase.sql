CREATE SCHEMA IF NOT EXISTS `db_users` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;

CREATE TABLE IF NOT EXISTS `db_users`.`user` (
  `userId` VARCHAR(15) NOT NULL,
  `correo` VARCHAR(30) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `coupleId` VARCHAR(15) NULL,
  PRIMARY KEY (`userId`),
  CONSTRAINT `FK_COUPLE_ID` 
    FOREIGN KEY (`coupleId`) 
    REFERENCES `db_users`.`user` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

DESCRIBE `db_users`.`user`;

