-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2022 a las 00:22:31
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `arg_prog_portfolio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experience`
--

CREATE TABLE `experience` (
  `id` bigint(20) NOT NULL,
  `anio_salida` int(11) DEFAULT NULL,
  `asignament` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `duracion` int(11) DEFAULT NULL,
  `link_exp` varchar(255) DEFAULT NULL,
  `logo_exp` varchar(255) DEFAULT NULL,
  `person` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `experience`
--

INSERT INTO `experience` (`id`, `anio_salida`, `asignament`, `company`, `duracion`, `link_exp`, `logo_exp`, `person`) VALUES
(11, 2021, 'Co-propietaria - Administración', 'Mascompany', 5, 'https://www.facebook.com/MascompanyPets', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experience_img_experience`
--

CREATE TABLE `experience_img_experience` (
  `experience_id` bigint(20) NOT NULL,
  `img_experience_id_img` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `experience_img_experience`
--

INSERT INTO `experience_img_experience` (`experience_id`, `img_experience_id_img`) VALUES
(11, 1),
(11, 6),
(11, 7),
(11, 8),
(11, 9),
(11, 10),
(11, 11),
(11, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(30);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `img_experience`
--

CREATE TABLE `img_experience` (
  `id_img` bigint(20) NOT NULL,
  `img_link` varchar(255) DEFAULT NULL,
  `soft_skill` varchar(255) DEFAULT NULL,
  `experience` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `img_experience`
--

INSERT INTO `img_experience` (`id_img`, `img_link`, `soft_skill`, `experience`) VALUES
(1, 'https://i.ibb.co/j8jxcjH/exp-1-3.jpg', 'A lo largo de cinco años, el reto más importante fue mantener motivado y unido al equipo que, vale mencionar, no tuvo rotación; fuimos los mismos desde el principio hasta el final.', NULL),
(6, 'asdfasdfTarde', 'asdf', NULL),
(7, 'https://i.ibb.co/j8jxcjH/exp-1-3.jpg', 'prueba', NULL),
(8, 'https://i.ibb.co/j8jxcjH/exp-1-3.jpg', 'sdf', NULL),
(9, 'https://i.ibb.co/qDMjCJt/administraci-n.jpg', '', NULL),
(10, 'https://i.ibb.co/qDMjCJt/administraci-n.jpg', '', NULL),
(11, 'https://i.ibb.co/qDMjCJt/administraci-n.jpg', '', NULL),
(12, 'https://i.ibb.co/qDMjCJt/administraci-n.jpg', '', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person`
--

CREATE TABLE `person` (
  `id_person` int(12) NOT NULL,
  `name` varchar(30) NOT NULL,
  `lastName` varchar(15) NOT NULL,
  `age` int(2) DEFAULT NULL,
  `origin` varchar(12) DEFAULT NULL,
  `presentation` text DEFAULT NULL,
  `professional_photo` varchar(2245) DEFAULT NULL,
  `email` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id_person` bigint(20) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `presentation` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `professional_photo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id_person`, `age`, `email`, `last_name`, `name`, `origin`, `presentation`, `profession`, `professional_photo`) VALUES
(1, 42, 'sandranfernandez@gmail.com', 'Fernández', 'Sandra N.', 'Formosa, Formosa', 'No es tan simple escribir esta parte; mientras tanto... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, earum? Ad debitis optio accusamus facilis voluptas. ', 'Full Stack Web Developer Jr.', 'https://i.ibb.co/YyBGRBQ/professional-photo.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona_experience`
--

CREATE TABLE `persona_experience` (
  `person_id_person` bigint(20) NOT NULL,
  `experience_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona_experience`
--

INSERT INTO `persona_experience` (`person_id_person`, `experience_id`) VALUES
(1, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona_project`
--

CREATE TABLE `persona_project` (
  `person_id_person` bigint(20) NOT NULL,
  `project_id_project` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona_project`
--

INSERT INTO `persona_project` (`person_id_person`, `project_id_project`) VALUES
(1, 2),
(1, 4),
(1, 27),
(1, 28);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona_skills`
--

CREATE TABLE `persona_skills` (
  `person_id_person` bigint(20) NOT NULL,
  `skills_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona_skills`
--

INSERT INTO `persona_skills` (`person_id_person`, `skills_id`) VALUES
(1, 16),
(1, 18),
(1, 19),
(1, 20),
(1, 21),
(1, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona_soc_med`
--

CREATE TABLE `persona_soc_med` (
  `person_id_person` bigint(20) NOT NULL,
  `soc_med_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona_study`
--

CREATE TABLE `persona_study` (
  `person_id_person` bigint(20) NOT NULL,
  `study_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona_study`
--

INSERT INTO `persona_study` (`person_id_person`, `study_id`) VALUES
(1, 23),
(1, 24),
(1, 29);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project`
--

CREATE TABLE `project` (
  `id_project` bigint(20) NOT NULL,
  `proy_descrip` varchar(255) DEFAULT NULL,
  `img_proy` varchar(255) DEFAULT NULL,
  `link_proy` varchar(255) DEFAULT NULL,
  `logo_proy` varchar(255) DEFAULT NULL,
  `project` varchar(255) DEFAULT NULL,
  `principal` bit(1) DEFAULT NULL,
  `person` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `project`
--

INSERT INTO `project` (`id_project`, `proy_descrip`, `img_proy`, `link_proy`, `logo_proy`, `project`, `principal`, `person`) VALUES
(2, 'Después de siete meses de una capacitación desde cero en programación, desarrollé un portfolio web (front y backend). Aquí aplicamos las habilidades adquiridas en HTML, CSS, Bootstrap, Typescript, Angular, SQL, Java y SpringBoot.', 'https://i.ibb.co/BLBndPZ/proy-1-3.png', 'https://portfolio-argentina-prog-f5593.web.app/admin', '', 'Portfolio - Argentina Programa', b'1', NULL),
(4, 'En el mismo curso de Codo a Codo, tuve que realizar a partir de un prototipo que me proveyeron un maquetado en Bootstrap aunque me permití incluir algo de CSS para lograr un mayor profesionalismo en el background de las cards.', 'https://i.ibb.co/sWFm9qh/bootstrap-isologo.jpg', 'https://sandrafz.github.io/cac003-maquetaBootstrap/', '', 'Trabajo Práctico Bootstrap - Codo a Codo', b'1', NULL),
(27, 'En la primera de dos partes de capacitación en Java, desarrollé un sitio a partir de un prototipo que me proveyeron. Aquí tuve la oportunidad de profundizar en HTML, CSS, Bootstrap y Javascrip hasta el momento.\n', 'https://i.ibb.co/2NBJFj5/proy-2.png', 'https://sandrafer-maquetacion1.netlify.app/', '', 'Trabajo integrador Frontend - Codo a Codo', b'1', NULL),
(28, 'Ratarrizz es un proyecto personal de confección de bolsos urbanos bajo el concepto de slow fashion. A futuro pretendo capacitar a otros artesanos en distintas técnicas y comercializar a distintos puntos del país.', 'https://i.ibb.co/nQ9D50D/proy-4.jpg', 'https://www.facebook.com/Ratarrizz', '', 'Ratarrizz - bolsos sustentables', b'0', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skills`
--

CREATE TABLE `skills` (
  `id` bigint(20) NOT NULL,
  `skill` varchar(255) DEFAULT NULL,
  `sk_progress` int(11) DEFAULT NULL,
  `person` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `skills`
--

INSERT INTO `skills` (`id`, `skill`, `sk_progress`, `person`) VALUES
(16, 'Java', 35, NULL),
(18, 'Javascript', 20, NULL),
(19, 'Angular', 20, NULL),
(20, 'Bootstrap', 20, NULL),
(21, 'HTML/CSS', 40, NULL),
(22, 'SQL', 35, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `social_media`
--

CREATE TABLE `social_media` (
  `id` bigint(20) NOT NULL,
  `link_sm` varchar(255) DEFAULT NULL,
  `logo_sm` varchar(255) DEFAULT NULL,
  `name_sm` varchar(255) DEFAULT NULL,
  `person` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `studies`
--

CREATE TABLE `studies` (
  `id` bigint(20) NOT NULL,
  `anio_end_study` int(11) DEFAULT NULL,
  `anio_ini` int(11) DEFAULT NULL,
  `instit` varchar(255) DEFAULT NULL,
  `link_studies` varchar(255) DEFAULT NULL,
  `logo_studies` varchar(255) DEFAULT NULL,
  `title_studies` varchar(255) DEFAULT NULL,
  `person` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `studies`
--

INSERT INTO `studies` (`id`, `anio_end_study`, `anio_ini`, `instit`, `link_studies`, `logo_studies`, `title_studies`, `person`) VALUES
(23, 2022, 2021, 'Argentina Programa', '', 'https://i.ibb.co/D85bkG8/logo-arg-prog-color.jpg', 'Full Stack Web Developer Jr.', NULL),
(24, 2002, 1999, 'Universidad Nacional de Nordeste (UNNE)', 'asdf', 'https://i.ibb.co/6vQByF6/UNNE-LOGO.jpg', 'Licenciatura/Profesorado en Filosofía (completo)', NULL),
(29, 2016, 2015, 'NEP y FP N°15', '', '', 'Confeccionista a modista', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `persona_id_person` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKk2wnmfudhaahviwwx9laraagh` (`person`);

--
-- Indices de la tabla `experience_img_experience`
--
ALTER TABLE `experience_img_experience`
  ADD UNIQUE KEY `UK_5a5rc43b01hi1j5uf2yg0gvy0` (`img_experience_id_img`),
  ADD KEY `FKfxgkdumqgisc1l2i4san3kw1a` (`experience_id`);

--
-- Indices de la tabla `img_experience`
--
ALTER TABLE `img_experience`
  ADD PRIMARY KEY (`id_img`),
  ADD KEY `FK31t3i4pb99ufiuguh1yn5p7v4` (`experience`);

--
-- Indices de la tabla `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id_person`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id_person`);

--
-- Indices de la tabla `persona_experience`
--
ALTER TABLE `persona_experience`
  ADD UNIQUE KEY `UK_fxdlwo8c5jdwdq7u6kk3i6d5e` (`experience_id`),
  ADD KEY `FK86i2ll3956nvtoywl9x158dtf` (`person_id_person`);

--
-- Indices de la tabla `persona_project`
--
ALTER TABLE `persona_project`
  ADD UNIQUE KEY `UK_6x7u92129eq96bnyi8yp60jd6` (`project_id_project`),
  ADD KEY `FK9hyycrbwhrwrd5ybpsj9e1q4a` (`person_id_person`);

--
-- Indices de la tabla `persona_skills`
--
ALTER TABLE `persona_skills`
  ADD UNIQUE KEY `UK_9xy7mwwoee90ydbhcfn5viw4m` (`skills_id`),
  ADD KEY `FKbi1qho5dli5f2csft6de0ojtd` (`person_id_person`);

--
-- Indices de la tabla `persona_soc_med`
--
ALTER TABLE `persona_soc_med`
  ADD UNIQUE KEY `UK_npmtkw4j5r0g6wd5avc1x9f2w` (`soc_med_id`),
  ADD KEY `FK31bll7nhko4xvvhgsrx31kq6` (`person_id_person`);

--
-- Indices de la tabla `persona_study`
--
ALTER TABLE `persona_study`
  ADD UNIQUE KEY `UK_a5hby0stlubi48yyaiq1bdwfg` (`study_id`),
  ADD KEY `FK9am2hpohwe44wj46dio4660hf` (`person_id_person`);

--
-- Indices de la tabla `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`),
  ADD KEY `FK8to0p9ahs7lgptyv5f6e7g0y` (`person`);

--
-- Indices de la tabla `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKde49h1dw1oc6drvexv97lp3y6` (`person`);

--
-- Indices de la tabla `social_media`
--
ALTER TABLE `social_media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK419oq6d84wvpq7wa93aehhxye` (`person`);

--
-- Indices de la tabla `studies`
--
ALTER TABLE `studies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK68wgw7puhmo4lbn1yx3d3r5hs` (`person`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKigk1qygj4a3enpc7a43sxot4q` (`persona_id_person`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `img_experience`
--
ALTER TABLE `img_experience`
  MODIFY `id_img` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id_person` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `experience`
--
ALTER TABLE `experience`
  ADD CONSTRAINT `FKk2wnmfudhaahviwwx9laraagh` FOREIGN KEY (`person`) REFERENCES `persona` (`id_person`);

--
-- Filtros para la tabla `experience_img_experience`
--
ALTER TABLE `experience_img_experience`
  ADD CONSTRAINT `FKfxgkdumqgisc1l2i4san3kw1a` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`),
  ADD CONSTRAINT `FKnmocb86f6nq3sf3eknc87h8gk` FOREIGN KEY (`img_experience_id_img`) REFERENCES `img_experience` (`id_img`);

--
-- Filtros para la tabla `img_experience`
--
ALTER TABLE `img_experience`
  ADD CONSTRAINT `FK31t3i4pb99ufiuguh1yn5p7v4` FOREIGN KEY (`experience`) REFERENCES `experience` (`id`);

--
-- Filtros para la tabla `persona_experience`
--
ALTER TABLE `persona_experience`
  ADD CONSTRAINT `FK86i2ll3956nvtoywl9x158dtf` FOREIGN KEY (`person_id_person`) REFERENCES `persona` (`id_person`),
  ADD CONSTRAINT `FKjtdbkr79c3etq4ywayels059` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`);

--
-- Filtros para la tabla `persona_project`
--
ALTER TABLE `persona_project`
  ADD CONSTRAINT `FK9hyycrbwhrwrd5ybpsj9e1q4a` FOREIGN KEY (`person_id_person`) REFERENCES `persona` (`id_person`),
  ADD CONSTRAINT `FKbsts9oww3m06lcxt1th6nxkic` FOREIGN KEY (`project_id_project`) REFERENCES `project` (`id_project`);

--
-- Filtros para la tabla `persona_skills`
--
ALTER TABLE `persona_skills`
  ADD CONSTRAINT `FKbi1qho5dli5f2csft6de0ojtd` FOREIGN KEY (`person_id_person`) REFERENCES `persona` (`id_person`),
  ADD CONSTRAINT `FKs56d7fqmktcqk0os0urntmdmp` FOREIGN KEY (`skills_id`) REFERENCES `skills` (`id`);

--
-- Filtros para la tabla `persona_soc_med`
--
ALTER TABLE `persona_soc_med`
  ADD CONSTRAINT `FK2ix3ro2vag80vyojhukqbe8gn` FOREIGN KEY (`soc_med_id`) REFERENCES `social_media` (`id`),
  ADD CONSTRAINT `FK31bll7nhko4xvvhgsrx31kq6` FOREIGN KEY (`person_id_person`) REFERENCES `persona` (`id_person`);

--
-- Filtros para la tabla `persona_study`
--
ALTER TABLE `persona_study`
  ADD CONSTRAINT `FK9am2hpohwe44wj46dio4660hf` FOREIGN KEY (`person_id_person`) REFERENCES `persona` (`id_person`),
  ADD CONSTRAINT `FKchhick4fj6rx9frswlhwdfx9e` FOREIGN KEY (`study_id`) REFERENCES `studies` (`id`);

--
-- Filtros para la tabla `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `FK8to0p9ahs7lgptyv5f6e7g0y` FOREIGN KEY (`person`) REFERENCES `persona` (`id_person`);

--
-- Filtros para la tabla `skills`
--
ALTER TABLE `skills`
  ADD CONSTRAINT `FKde49h1dw1oc6drvexv97lp3y6` FOREIGN KEY (`person`) REFERENCES `persona` (`id_person`);

--
-- Filtros para la tabla `social_media`
--
ALTER TABLE `social_media`
  ADD CONSTRAINT `FK419oq6d84wvpq7wa93aehhxye` FOREIGN KEY (`person`) REFERENCES `persona` (`id_person`);

--
-- Filtros para la tabla `studies`
--
ALTER TABLE `studies`
  ADD CONSTRAINT `FK68wgw7puhmo4lbn1yx3d3r5hs` FOREIGN KEY (`person`) REFERENCES `persona` (`id_person`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FKigk1qygj4a3enpc7a43sxot4q` FOREIGN KEY (`persona_id_person`) REFERENCES `persona` (`id_person`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
