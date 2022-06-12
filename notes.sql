-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 12, 2022 at 09:06 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notes`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(128) DEFAULT NULL,
  `text` longtext,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `author` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `text`, `time`, `author`) VALUES
(73, 'Cheesy Lorem Ipsum', '<p>Blue castello fromage frais st. agur blue cheese. Brie everyone loves fromage frais say cheese cheese slices dolcelatte emmental cottage cheese. Stilton feta fromage frais taleggio cut the cheese halloumi cheese and wine stinking bishop. Caerphilly jarlsberg macaroni cheese cheese strings chalk and cheese manchego cheese strings jarlsberg. Rubber cheese.</p>\n<p>Rubber cheese cheese strings edam. Taleggio paneer taleggio cottage cheese cheese on toast pepper jack mozzarella smelly cheese. Babybel port-salut chalk and cheese mozzarella smelly cheese parmesan boursin croque monsieur. Bocconcini.</p>\n<p>Cheesecake goat st. agur blue cheese. Danish fontina rubber cheese squirty cheese edam fondue who moved my cheese blue castello croque monsieur. Bocconcini hard cheese bavarian bergkase pecorino cow stinking bishop bavarian bergkase paneer. Cheesy grin brie cheese and biscuits cheesecake taleggio.</p>\n<p>Cheddar mascarpone hard cheese. Cheese slices blue castello cheesy grin jarlsberg emmental ricotta cheesy feet blue castello. Cheese and wine feta cheese strings cheesecake ricotta cream cheese cheeseburger squirty cheese. Stilton dolcelatte stinking bishop smelly cheese macaroni cheese danish fontina smelly cheese pecorino. Lancashire fromage frais.</p>\n<p>Cheese strings mozzarella everyone loves. Fondue mascarpone gouda feta say cheese fromage frais emmental danish fontina. Brie cream cheese feta cheddar blue castello pepper jack cheesecake danish fontina. Boursin gouda bocconcini port-salut red leicester.</p>', '2022-06-12 15:30:34', NULL),
(84, 'Crispy Lorem Ipsum', '<p>Bacon ipsum dolor amet filet mignon meatball pork belly, biltong shankle corned beef ham chicken cupim sausage porchetta venison pork. Andouille pork pig, meatloaf burgdoggen short ribs pastrami bacon strip steak jowl turkey swine. Ham hock jowl boudin t-bone alcatra sirloin doner leberkas ball tip salami brisket. Cupim salami biltong, shank jerky short ribs cow capicola. Ball tip hamburger sausage shoulder, leberkas ham shankle ground round landjaeger alcatra. Turducken shank chuck ham hock, drumstick porchetta chicken.</p>\n<p>Ham biltong capicola, boudin rump picanha chuck andouille tri-tip chicken. Capicola prosciutto ribeye, pork loin flank chicken biltong pastrami strip steak turkey brisket tri-tip. Strip steak sirloin short loin, tri-tip pancetta alcatra shankle. Ground round fatback flank strip steak tongue buffalo rump pork kevin short loin shoulder meatloaf shank. Pastrami cow tri-tip ham hock t-bone pork loin. Filet mignon ball tip burgdoggen chicken corned beef chuck sirloin pastrami fatback ribeye kevin. Short ribs jerky bacon, meatball bresaola jowl kevin chicken meatloaf alcatra buffalo corned beef.</p>\n<p>Pancetta capicola cupim andouille. Flank doner turducken, shankle jerky drumstick ground round cupim tenderloin ham cow capicola sausage. Pork chop pig cupim capicola, shoulder leberkas frankfurter. Brisket beef ribs sausage biltong ribeye cow meatloaf burgdoggen shoulder landjaeger andouille bresaola short ribs.&nbsp;</p>\n<p>Edit works</p>', '2022-06-12 21:01:53', NULL),
(85, 'När allt funkar så är det bra', '<p>Man blir s&aring; glad n&auml;r man f&aring;r till det att fungera som det ska.</p>\n<p>Tiden funkar inte n&auml;r man inte har tid.</p>\n<p>Tid f&aring;r man i framtiden.</p>\n<p>Tid &auml;r underskattat!!</p>\n<p>Det fungerar iallafall och nu &auml;r jag glad :)</p>', '2022-06-12 21:03:59', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'janne', '123'),
(2, 'nathalie', '123'),
(3, 'victor', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
