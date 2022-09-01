import './Example.css'

function Example(prop) {
    return(
        <div className="example">
              <h1 ><u>{prop.Names} data</u></h1>
  <form>
  <label for="name"><b>{prop.name} Name :</b>&nbsp;</label>
    <input type="text" id="name" name="name"/><br/><br/>
    <label for="age"><b>{prop.name} age :</b>&nbsp;&nbsp;</label>
    <input type="number" id="age" name="age" /><br/><br/>
    <label for="course"><b>Course :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input type="text" id="course" name="course"/><br/><br/>
    <label for="sem"><b>Semister :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input type="number" id="sem" name="sem" size="1"/><br/><br/>
    <label for="pho"><b>Phone no :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input type="number" id="pho" name="pho"/><br/><br/>
    <label for="email"><b>Email :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input type="email" id="email" name="email"/><br/><br/>
    <label for="date"><b>BOD :</b>&nbsp;&nbsp;&nbsp;</label>
    <input type="date" id="date" name="date"/><br/><br/>
    <input type="submit" id="submit" value="ENTER"/>
    </form>       
    
     </div>
    );
}

export default Example;