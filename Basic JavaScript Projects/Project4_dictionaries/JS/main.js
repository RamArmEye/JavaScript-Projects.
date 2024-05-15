//Project4_dictionaries

// 1 Dictionary Assignment and Operators as Words assignment
function my_Dictionary() {
    var HTML_vulnerabilities = {
        XSS: "Cross-Site Scripting",
        CSRF: "Cross-Site Request Forgery",
        Injection: "Malicious code",
        DoS: "Denial of Service",
        IDOR: "Insecure Direct Object Reference"
		//IDOR: "Insecure Direct Object Reference"// when duplicates code is not runing
    };
	delete HTML_vulnerabilities.IDOR //undefined” since the value no longer exists
    // Display the dictionary contents
    document.getElementById("Dictionary").innerHTML = HTML_vulnerabilities.IDOR
}
