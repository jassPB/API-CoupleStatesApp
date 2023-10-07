CREATE SCHEMA IF NOT EXISTS `db_couples_states` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;

CREATE TABLE IF NOT EXISTS `db_couples_states`.`coupleState` (
  `id` INT(15) NOT NULL AUTO_INCREMENT,
  `senderId` VARCHAR(15) NOT NULL,
  `receiverId` VARCHAR(15) NOT NULL,
  `type` VARCHAR(8) NOT NULL,
  `feel` VARCHAR(45) NOT NULL,
  `emotions` VARCHAR(100) NOT NULL,
  `generalComment` VARCHAR(200) NULL,
  `coupleComment` VARCHAR(200) NULL,
  `date` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

DESCRIBE `db_couples_states`.`coupleState`;