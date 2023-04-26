//일반 과제

/*import React, {useState, useTransition} from "react";

const Diary = () => {
  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // 실습으로 다뤘던 두 문제를 참고하면 충분히 해결할 수 있으실거라 생각합니다!
  const[subject, setSub] = useState("");
  const[content, setCon] = useState("");
  
  const handleSub = (e) => {
    setSub(e.target.value);
  }
  const handleCon = (e) => {
    setCon(e.target.value);
  }
  const reset = () => {
    setSub("");
    setCon("");
  }
  const submit = () => {
    alert("제목: " + subject + "\n" + "내용: " + content);
  }
  return (
    <div className="diary">
      <input value={subject} name="subject" placeholder="제목을 입력해주세요" onChange={handleSub}/> 
      <br />
      <textarea value={content} name="content" placeholder="내용을 입력해주세요" onChange={handleCon}/>
      <br />
      <button onClick={reset}>초기화</button>
      <br />
      <button onClick={submit}>입력 완료</button>
    </div>
  );
}; 

export default Diary;

*/


//도전과제
import React, {useState, useTransition} from "react";

const Diary = () => {
  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // 실습으로 다뤘던 두 문제를 참고하면 충분히 해결할 수 있으실거라 생각합니다!
  const [info, setInfo] = useState({
    subject: "",
    content: ""
  });

  function handleChanger(e) {
    const {name, value} = e.target;

    setInfo((prevValue) => {
      if(name === "subject") {
        return{
          subject:value,
          content:prevValue.content
        }
      } else if(name==="content") {
        return {
          subject:prevValue.subject,
          content:value
        }
      }
    })
    
  }
  const reset = () => {
    setInfo({
      info: {
        subject:"asdf",
        content:"asdf"
      },
    });
  }
  const submit = () => {
    alert("제목: " + info.subject + "\n" + "내용: " + info.content);
  }
  return (
    <div className="diary">
      <input value={info.subject} name="subject" placeholder="제목을 입력해주세요" onChange={handleChanger}/> 
      <br />
      <textarea value={info.content} name="content" placeholder="내용을 입력해주세요" onChange={handleChanger}/>
      <br />
      <button onClick={reset}>초기화</button>
      <br />
      <button onClick={submit}>입력 완료</button>
    </div>
  );
};

export default Diary;
