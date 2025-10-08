//your JS code here. If required.
const tbody=document.getElementById("book-list");
const form=document.querySelector(".form-group");
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	const title=e.target[0].value;
	const author=e.target[1].value;
	const isbn=e.target[2].value;
	const tr=document.createElement("tr");
	const td1=document.createElement("td");
	td1.innerText=title;
	const td2=document.createElement("td");
	td2.innerText=author;
	const td3=document.createElement("td");
	td3.innerText=isbn;
	tr.append(td1,td2,td3);
	tbody.appendChild(tr);
	console.log(title,author,isbn)
})