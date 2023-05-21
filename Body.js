import {React as React} from 'react'
import { useState } from 'react'
import './Body.css'
import TypewriterComponent from 'typewriter-effect'
export default function Body() {
 
    
 
         const[name,setname]=useState('https://res.cloudinary.com/deodexxgt/image/upload/v1684416068/cf_upxvod.png')
         const[nam1,setnam1]=useState("https://codeforces.com/profile/A.ORION")
        
        const handleclick=()=>{
            var r=Math.floor(Math.random() * 6)+Math.floor(Math.random() * 6);
         r=r%5
         console.log(r);
            
            
            if(r===0){
                setname('https://res.cloudinary.com/deodexxgt/image/upload/v1684416068/cf_upxvod.png')
                setnam1("https://codeforces.com/profile/A.ORION")
            }
            else if(r===1){
            setname('https://res.cloudinary.com/deodexxgt/image/upload/v1684416068/AtCoder_ho0eyq.png')
            setnam1("https://atcoder.jp/users/ORION4")
            
        }
        else if(r===2){
            setname('https://res.cloudinary.com/deodexxgt/image/upload/v1684416067/cdf_nl4lec.jpg')
            setnam1("https://www.codechef.com/users/orion7")
        }
        else if(r===3){
            setname('https://res.cloudinary.com/deodexxgt/image/upload/v1684416068/GeeksforGeeks-StartupTalky_eygsw5.jpg')
            setnam1("https://auth.geeksforgeeks.org/user/ayushkumardas146/practice")
        }
        else if(r===4){
            setname('https://res.cloudinary.com/deodexxgt/image/upload/v1684416067/lt_vhjoql.png')
            setnam1("https://leetcode.com/ayushkumardas146/")
        }

    }
  return (
    <div className="conttt">
  <div className="contt">
    <div className="contt1">
        <div className="name">
            <h1 className="n">
                AYUSH DAS
            </h1>
        </div>
        <div className="ty">  <TypewriterComponent
              options={{
                strings: ['A Web Developer', 'A Competitive Programmer', 'A Manager'],
                autoStart: true,
                loop: true,
                deleteSpeed: 'natural',
                wrapperClassName: 'typewriter',
                cursorClassName: 'cursorSize'
              }} />
              </div>
    </div>
    <div className="contt2">
        <div className="image"></div>
    </div>
  </div>
  <div className="skills">
    <div className="nsk">MY SKILLS</div>
    <div className="gpl"><h1 className='gps'>GENERAL PROGRAMMING LANGUAGES</h1></div>
    <div className="gp">
        
        <div className="c"><div className="imc kp"></div><div className="nc"><a href="https://en.wikipedia.org/wiki/C_(programming_language)" target='blank'><h1>c</h1></a></div></div>
        <div className="cp"><div className="imcp kp"></div><div className="ncp"><a href="https://en.wikipedia.org/wiki/C%2B%2B" target='blank'><h1>c + +</h1></a></div></div>
        <div className="ht"><div className="hti kp"></div><div className="htn"><a href="https://en.wikipedia.org/wiki/HTML" target='blank'><h1>HTML</h1></a></div></div>
        <div className="csss"><div className="cssi kp"></div><div className="cssn"><a href="https://en.wikipedia.org/wiki/CSS" target='blank'><h1>CSS</h1></a></div></div>
        <div className="ja"><div className="jai kp"></div><div className="jan"><a href="https://en.wikipedia.org/wiki/JavaScript" target='blank'><h1>JAVASCRIPT</h1></a></div></div>
        <div className="gittt"><div className="giti kp"></div><div className="gitn"><a href="https://en.wikipedia.org/wiki/Git" target='blank'><h1>GIT</h1></a></div></div>
    </div>
    <div className="data"><h1 className='dat'>DATABASE</h1></div>
    <div className="mysq"><div className="imsq kpl"></div><div className="nsq"><a href="https://en.wikipedia.org/wiki/MySQL" target="_blank"><h1>MYSQL</h1></a></div>
    <div className="myp">
        <p><span><em></em>MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other.MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation). In 2010, when Oracle acquired Sun, Widenius forked the open-source MySQL project to create MariaDB.</span></p></div></div>
   
    <div className="cou"><h1 className='pop'>COURSEWORKS</h1></div>
    <div className="cour"><div className="imco kp"></div><div className="nco"><a href="https://en.wikipedia.org/wiki/Data_structure" target="blank"><h1>DSA</h1></a></div><div className="pc"><p>Data structures serve as the basis for abstract data types (ADT). The ADT defines the logical form of the data type. The data structure implements the physical form of the data type.

Different types of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks. For example, relational databases commonly use B-tree indexes for data retrieval, while compiler implementations usually use hash tables to look up identifiers.

Data structures provide a means to manage large amounts of data efficiently for uses such as large databases and internet indexing services. Usually, efficient data structures are key to designing efficient algorithms. Some formal design methods and programming languages emphasize data structures, rather than algorithms, as the key organizing factor in software design. Data structures can be used to organize the storage and retrieval of information stored in both main memory and secondary memory.Data structures are generally based on the ability of a computer to fetch and store data at any place in its memory, specified by a pointer—a bit string, representing a memory address, that can be itself stored in memory and manipulated by the program. Thus, the array and record data structures are based on computing the addresses of data items with arithmetic operations, while the linked data structures are based on storing addresses of data items within the structure itself.The implementation of a data structure usually requires writing a set of procedures that create and manipulate instances of that structure. </p></div></div>
    <div className="tools"><h1 className='tyu'>TOOLS I USE TO SHOWCASE MY CODING SKILLS</h1></div>
    <div className="mega">
    <div className="img1" ><a href={nam1} target="blank"><img src={name} alt="" className='lpo'/></a></div>
<div className='tttt'><button onClick={handleclick} className='btn'>N E X T</button></div>
</div>
  </div>
  <div className="cme">
    <div className="cnme"><h2>CONTACT ME</h2></div>
    <div className="sizw">
     <div className="forms">
        <div className="icons">
           <a href="https://www.instagram.com/" target='blank'> <div className="insta"></div></a>
           <a href="https://www.linkedin.com/in/ayush-das-17772322a/" target='blank'><div className="ln"></div></a>
           <a href="https://github.com/ayushkumar146" target='blank'><div className="gtb"></div></a> 
        </div>
        <div className="email">
            <div className="email1">
            <h2 classname="emk">
    <strong>
      <u />
    </strong>
  </h2>
  <form action="mailto:ayush.kumardas146@gmail.com" method="post">
    <label htmlfor="" classname="ye" />
    <input type="text" placeholder="  ENTER YOUR NAME" classname="ye" />
    <br />
    <label htmlfor="" classname="" />
    <input type="email" placeholder="  ENTER YOUR EMAIL" classname="ye" />
    <br />
    <label htmlfor="" classname="no">
      <h4>GENDER :</h4>
    </label>
    <br />
    <h3 classname="yes">Male</h3>
    <input type="radio" name="mygender" classname="yes" />
    <br />
    <h3 classname="yes">Female</h3> <input type="radio" name="mygender" id="" />
    <br />
    <h3 classname="yes">None</h3> <input type="radio" name="mygender" id="" />
    <br /><br />
    <label htmlfor="" classname="yes">
      <h4>Rate my CV :</h4>
    </label>
    <input type="range" classname="no" />
    <br /><br />
    <label htmlfor="" classname="yes" />
    <br />
    <textarea
      name="mytext"
      id=""
      cols={50}
      rows={10}
      classname="yet"
      
      placeholder="Any suggestions please :"
      defaultValue={""}
    />
    <br />
    <br />
    <br />
    <input type="Submit" defaultValue="SUBMIT" classname="uio" />
    <br />
    <input type="Reset" defaultValue="RESET " classname="uio" />
  </form>
      </div>
      </div>
        </div>
     </div>
  </div>


  </div>
  )
}
