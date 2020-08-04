notes = document.getElementById("notes");
        today = new Date();
        currentMonth = today.getMonth();
        currentYear = today.getFullYear();

        months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        monthAndYear = document.getElementById("monthAndYear");
        showCalendar(currentMonth, currentYear);


        function nextMonth() {
            currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
            currentMonth = (currentMonth + 1) % 12;
            showCalendar(currentMonth, currentYear);
        }

        function previousMonth() {
            currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
            currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
            showCalendar(currentMonth, currentYear);
        }


        function showCalendar(month, year) {

            let firstDay = (new Date(year, month)).getDay();

            tbl = document.getElementById("calendar-body"); // body of the calendar

            // clearing all previous cells
            tbl.innerHTML = "";
            notes.innerHTML = "";
            // filing data about month and in the page via DOM.
            monthAndYear.innerHTML = months[month]+ " " + year;

            // creating all cells
            let date = 1;
            for (let i = 0; i < 6; i++) {
                // creates a table row
                let row = document.createElement("tr");

                //creating individual cells, filing them up with data.
                for (let j = 0; j < 7; j++) {
                    if (i === 0 && j < firstDay) {
                        cell = document.createElement("td");
                        cellText = document.createTextNode("");
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                    }
                    else if (date > daysInMonth(month, year)) {
                        break;
                    }

                    else {
                        cell = document.createElement("td");
                        cellText = document.createTextNode(date);
                        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                            cell.classList.add("today");
                            addNotes("Today")
                        } // color today's date
                        checkBirthday(date, month);
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                        date++;
                    }


                }

                tbl.appendChild(row); // appending each row into calendar body.
            }

        }

        function addNotes(iStr, iClass) {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(iStr + " ");
            node.appendChild(textnode);
            var att = document.createAttribute("class");
            att.value = iClass;
            node.setAttributeNode(att);
            notes.appendChild(node);
        }

        function checkBirthday(iDate, iMonth) {
            babysoul = {
                month : 6,
                day : 6,
                color: "#99cc00"
            }
            jiae = {
                month : 4,
                day : 21,
                color: "#ff99cc"
            }
            jisoo = {
                month : 1,
                day : 11,
                color: "#FFFF99"
            }
            mijoo = {
                month : 8,
                day : 23,
                color: "#9900ff"
            }
            kei = {
                month : 2,
                day : 20,
                color: "#57e08e"
            }
            jin = {
                month : 5,
                day : 12,
                color: "#FF0066"
            }
            sujeong = {
                month : 10,
                day : 19,
                color: "#0099FF"
            }
            yein = {
                month : 5,
                day : 4,
                color: "#ff9900"
            }
            lovelyz = {
                month : 10,
                day : 17,
                color: "#fff"
            }
            if (iDate === babysoul.day && iMonth === babysoul.month) {
                    cell.style.backgroundColor = babysoul.color;
                    addNotes("Babysoul's Birthday", "babysoul")
                }
            else if (iDate === jiae.day && iMonth === jiae.month) {
                    cell.style.backgroundColor = jiae.color;
                    addNotes("Jiae's Birthday", "jiae")
                }
            else if (iDate === jisoo.day && iMonth === jisoo.month) {
                    cell.style.backgroundColor = jisoo.color;
                    addNotes("Jisoo's Birthday", "jisoo")
                }
            else if (iDate === mijoo.day && iMonth === mijoo.month) {
                    cell.style.backgroundColor = mijoo.color;
                    addNotes("Mijoo's Birthday", "mijoo")
                }
            else if (iDate === kei.day && iMonth === kei.month) {
                    cell.style.backgroundColor = kei.color;
                    addNotes("Kei's Birthday", "kei")
                }
            else if (iDate === jin.day && iMonth === jin.month) {
                    cell.style.backgroundColor = jin.color;
                    addNotes("Jin's Birthday", "jin")
                }
            else if (iDate === sujeong.day && iMonth === sujeong.month) {
                    cell.style.backgroundColor = sujeong.color;
                    addNotes("Sujeong's Birthday", "sujeong")
                }
            else if (iDate === yein.day && iMonth === yein.month) {
                    cell.style.backgroundColor = yein.color;
                    addNotes("Yein's Birthday", "yein")
                }    
        }


        // check how many days in a month code from https://dzone.com/articles/determining-number-days-month
        function daysInMonth(iMonth, iYear) {
            return 32 - new Date(iYear, iMonth, 32).getDate();
        }