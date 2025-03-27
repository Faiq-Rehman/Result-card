        function calculateResult() {
            let math = Number(document.getElementById("math").value) || 0;
            let urdu = Number(document.getElementById("urdu").value) || 0;
            let english = Number(document.getElementById("english").value) || 0;
            let comp = Number(document.getElementById("comp").value) || 0;
            let physics = Number(document.getElementById("physics").value) || 0;
            
            let total = math + urdu + english + comp + physics;
            let percentage = (total / 500) * 100;
            
            document.getElementById("total").textContent = total;
            document.getElementById("percentage").textContent = percentage.toFixed(2), "%";
            
            let grade = "F";
            if (percentage >= 90) grade = "A+";
            else if (percentage >= 80) grade = "A";
            else if (percentage >= 70) grade = "B+";
            else if (percentage >= 60) grade = "B";
            else if (percentage >= 50) grade = "C";
            else grade = "F";
            
            document.getElementById("grade").textContent = grade;
            document.getElementById("status").textContent = percentage >= 50 ? "You Are Pass" : "You Are Fail";
        }
