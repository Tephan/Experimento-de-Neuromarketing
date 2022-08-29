CREATE DATABASE `experimento` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE experimento;

-- ********************** Creación de tablas **********************
CREATE TABLE IF NOT EXISTS `Participante` (
  `IdParticipante` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Sexo` VARCHAR(20),
  `Edad` VARCHAR(20),
  `Escolaridad` VARCHAR(100),
  `Ocupacion` VARCHAR(100),
  `HorasAyuno` VARCHAR(20),
  `HorasDespierto` VARCHAR(20),
  `NumComidas` VARCHAR(25),
  PRIMARY KEY `pk_participante`(`IdParticipante`)
) ENGINE = InnoDB;

DESCRIBE Participante;

-- ___________________________________________________
CREATE TABLE IF NOT EXISTS `Eleccion` (
  `IdEleccion` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `TipoEstimulo` VARCHAR(20),
  `NumOpciones` INT,
  `IdParticipante` INT UNSIGNED,
  `Tiempo` TIMESTAMP,
  `Elegido` VARCHAR(30),
  PRIMARY KEY `pk_eleccion`(`IdEleccion`)
) ENGINE = InnoDB;

DESCRIBE Eleccion;

-- ___________________________________________________
CREATE TABLE IF NOT EXISTS `ETD` (
  `IdEtd` INT NOT NULL AUTO_INCREMENT,
  `P1` VARCHAR(20),
  `P2` VARCHAR(20),
  `P3` VARCHAR(20),
  `P4` VARCHAR(20),
  `P5` VARCHAR(20),
  `P6` VARCHAR(20),
  `P7` VARCHAR(20),
  `P8` VARCHAR(20),
  `P9` VARCHAR(20),
  `P10` VARCHAR(20),
  `P11` VARCHAR(20),
  `P12` VARCHAR(20),
  `P13` VARCHAR(20),
  `P14` VARCHAR(20),
  `P15` VARCHAR(20),
  `IdEleccion` INT UNSIGNED,
  PRIMARY KEY `pk_etd`(`IdEtd`)
)ENGINE = InnoDB;

DESCRIBE ETD;

-- ___________________________________________________
CREATE TABLE IF NOT EXISTS `EMAX` (
  `IdEmax` INT NOT NULL AUTO_INCREMENT,
  `P1` VARCHAR(20),
  `P2` VARCHAR(20),
  `P3` VARCHAR(20),
  `P4` VARCHAR(20),
  `P5` VARCHAR(20),
  `P6` VARCHAR(20),
  `P7` VARCHAR(20),
  `P8` VARCHAR(20),
  `P9` VARCHAR(20),
  `P10` VARCHAR(20),
  `P11` VARCHAR(20),
  `P12` VARCHAR(20),
  `P13` VARCHAR(20),
  `IdParticipante` INT UNSIGNED,
  PRIMARY KEY `pk_emax`(`IdEmax`)
)ENGINE = InnoDB;

DESCRIBE EMAX;

-- ___________________________________________________
CREATE TABLE IF NOT EXISTS `Producto` (
  `IdProducto` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(100),
  `Tipo` VARCHAR (20),
  `Ruta` VARCHAR(50),
  `Descripcion` TEXT,
  PRIMARY KEY `pk_producto`(`IdProducto`)
)ENGINE = InnoDB;

DESCRIBE Producto;

-- ********************** Inserción de llaves foraneas **********************

--ALTER TABLE Eleccion ADD CONSTRAINT fk_participante_eleccion FOREIGN KEY (IdParticipante) REFERENCES Participante(IdParticipante) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE Eleccion ADD CONSTRAINT fk_producto_eleccion FOREIGN KEY (IdProducto) REFERENCES Producto(IdProducto) ON DELETE CASCADE ON UPDATE CASCADE;
--ALTER TABLE ETD ADD CONSTRAINT fk_eleccion_etd FOREIGN KEY (IdEleccion) REFERENCES Eleccion(IdEleccion) ON DELETE CASCADE ON UPDATE CASCADE;
--ALTER TABLE EMAX ADD CONSTRAINT fk_participante_emax FOREIGN KEY (IdParticipante) REFERENCES Participante(IdParticipante) ON DELETE CASCADE ON UPDATE CASCADE;

--Debes correr las que no estan comentadas cuando agregues productos
-- Tambien modifica IdProducto en Eleccion y en Estimulo a INT
