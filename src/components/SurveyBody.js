import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";
import { Checkbox } from "antd";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [dList, setDlist] = useState([]);
  const [consumer, setConsumer] = useState(null);
  console.log(consumer);
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q4dot1, setQ4dot1] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q5dot1, setQ5dot1] = useState(null);
  const [q5dot2, setQ5dot2] = useState("");
  const [q5dot3, setQ5dot3] = useState("");
  const [q6, setQ6] = useState(null);
  const [q7, setQ7] = useState([]);
  const [q8, setQ8] = useState([]);

  const [pressSearch, setPressSearch] = useState(true);
  const [next, setNext] = useState(false);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  useEffect(() => {
    fetch("http://192.168.1.243:5000/dMatched")
      .then((res) => res.json())
      .then((dData) => setDlist(dData));
  }, []);
  const handleSearch = () => {
    const dNumber = dList.find((d) => d.Consumer_No === searchNumber);
    console.log(dNumber);
    setConsumer(dNumber);
    setPressSearch(false);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    setQ3(e.target.value);
  };
  const q4value = (e) => {
    setQ4(e.target.value);
  };
  const q4dot1value = (e) => {
    setQ4dot1(e.target.value);
  };
  const q5value = (e) => {
    setQ5(e.target.value);
  };
  const q5dot1value = (e) => {
    setQ5dot1(e.target.value);
  };
  const q5dot2value = (e) => {
    setQ5dot2(e.target.value);
  };
  const q5dot3value = (e) => {
    setQ5dot3(e.target.value);
  };
  const q6value = (e) => {
    setQ6(e.target.value);
  };
  const q7value = (checkedValues7) => {
    console.log('Q7checked = ', checkedValues7);
    setQ7(checkedValues7);
  };
  const q8value = (checkedValues8) => {
    console.log('Q8checked = ', checkedValues8);
    setQ8(checkedValues8);
  };
  const agent= sessionStorage.getItem('agent');
  console.log(agent);
  const handleSubmit = (e) => {
    const answer = {
      ans1: q1,
      ans2: q2,
      ans3: q3,
      ans4: q4,
      ans4dot1: q4dot1,
      ans5: q5,
      ans5dot1: q5dot1,
      ans5dot2: q5dot2,
      ans5dot3: q5dot3,
      ans6: q6,
      ans7: q7,
      ans8: q8,
      agentID:agent
    };
    fetch(`http://192.168.1.243:5000/answers/${consumer._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(answer);
    window.location.reload(false);
  };

  return (
    <div>
      <div style={{ display: consumer === null ? "block" : "none" }}>
        <input
          onChange={handleText}
          className="form-control w-50"
          type="text"
          name="serachNumber"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <div
        style={{
          display:
            (next === true && "none") || pressSearch === false
              ? "block"
              : "none",
        }}
      >
        <h5>আসসালামু আলাইকুম!</h5>
        <h6>1.আমি কি জনাব {consumer?.c_name} স্যারের সাথে কথা বলছি?</h6>
        <Form.Group onChange={q1value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="No"
              value="no"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1 === null ? "none" : "block",
        }}
        className="mt-2"
      >
        <h6>
          2.আমি একটি রিসার্চ কোম্পানি থেকে ফোন করেছি, আপনার সাথে কি কিছুক্ষণ কথা
          বলতে পারি?
        </h6>
        <Form.Group onChange={q2value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="No"
              value="no"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Busy"
              value="busy"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div
        style={{ display: q2 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>3.স্যার, আপনার বয়স কতো, সেটি কি জানতে পারি?</h6>
        <Form.Group onChange={q3value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="১৮ এর নিচে"
              value="-18"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="১৮-২৪"
              value="18-24"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="২৫-৩৩"
              value="25-33"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৩৪-৫০"
              value="34-50"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৫০+"
              value="50+"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q3 === "18-24" || q3 === "25-33" || q3 === "34-50" || q3 === "50+"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>4.স্যার, আপনি কি ধূমপান করেন?</h6>
        <Form.Group onChange={q4value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="হ্যাঁ"
              value="yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="না"
              value="no"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div
        style={{ display: q4 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>4.1.স্যার, জানতে পারি- আপনি কোন ব্র্যান্ড এর সিগারেট পান করেন?</h6>
        <Form.Group onChange={q4dot1value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Navy Special Filter"
              value="Navy Special Filter"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Navy Century"
              value="Navy Century"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Star"
              value="star"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Star Next"
              value="Star Next"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Royals"
              value="royals"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Others"
              value="others"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div
        style={{ display: q4dot1 === null ? "none" : "block" }}
        className="mt-2"
      >
        <h6>
          ৫.স্যার, গত এক সপ্তাহের মধ্যে ( ডাটা তারিখ অনুযায়ী) আপনার সাথে কি নেভি
          ব্র্যান্ড নিয়ে কোন প্রতিনিধি/লোক যোগাযোগ করেছিল?
        </h6>
        <Form.Group onChange={q5value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="হ্যাঁ"
              value="yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="না"
              value="no"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div
        style={{ display: q5 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          5.1 প্রতিনিধির সাথে কথা বলার পর আপনি দোকান থেকে কত শলাকা নেভি স্পেশাল
          ফিল্টার / নেভি সেঞ্চুরি (যে ভ্যারিয়েন্ট ট্রায়েল করেছিলো সেটা উল্লেখ
          করতে হবে) সিগারেট কিনেছিলেন?{" "}
        </h6>
        <Form.Group onChange={q5dot1value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="কেবলমাত্র ব্র্যান্ড মেসেজ"
              value="brandmsg"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="১ শলাকা"
              value="1solaka"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="২ শলাকা"
              value="2solaka"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৩ শলাকা"
              value="3solaka"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৪ শলাকা"
              value="4solaka"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৫ শলাকা"
              value="5solaka"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="২ প্যাকেট"
              value="2packet"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q5dot1 === "4solaka" || q5dot1 === "5solaka" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>5.2আপনি কি সিগারেট রাখার জন্য প্লাস্টিক স্যাসে পেয়েছেন?</h6>
        <Form.Group onChange={q5dot2value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="হ্যাঁ"
              value="yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="না"
              value="no"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div>
        <div
          style={{ display: q5dot1 === "2packet" ? "block" : "none" }}
          className="mt-2"
        >
          <h6>
            5.3 আপনি অতিরিক্ত মুল্য দিয়ে একটি বক্সের মধ্যে 2 প্যাকেট এর সাথে
            একটি লাইটার পেয়েছেন কিনা?
          </h6>
          <Form.Group onChange={q5dot3value} as={Row}>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="হ্যাঁ"
                value="yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="না"
                value="no"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
        </div>
      </div>
      <div
        style={{
          display:
            q5dot1 === "brandmsg" ||
            q5dot1 === "1solaka" ||
            q5dot1 === "2solaka" ||
            q5dot1 === "3solaka" ||
            q5dot2 === "yes" ||
            q5dot3 === "yes" ||
            q5dot2 === "no" ||
            q5dot3 === "no"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          6.আপনার কি মনে আছে প্রতিনিধি নেভি নিয়ে কথা বলার সময় তার মুল বক্তব্য কি
          ছিল অথবা নেভি নিয়ে কি কি কথা বলেছিল ?
        </h6>
        <Form.Group onChange={q6value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="নেভি স্পেশাল ফিল্টার এখন মর্ডান প্যাক ও সেই একই নেভি স্বাদে (আধুনিক প্যাক, নতুন প্যাক, মর্ডান প্যাক, নতুন নেভি, টেস্ট পরিবর্তন হয়য় নাই, সুন্দর প্যাক, একই স্বাদ)"
              value="1"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="লম্বা সময়ের তৃপ্তির জন্য প্রিমিয়াম ডিজাইন ও বড় সাইজে নেভি সেঞ্চুরি (লম্বা নেভি, বড় নেভি, নেভি সেঞ্চুরি, প্রিমিয়াম ডিজাইন, নতুন নেভি, নেভি ১০০স, বড় সাইজ, বেশি তামাক, লম্বা সময়   তৃপ্তি, বড় স্টিক, লম্বা স্টিক, প্রিমিয়াম ডিজাইন, বড় সাইজ)"
              value="2"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div style={{ display: q6 === null ? "none" : "block" }} className="mt-2">
        <h6>
          7.আপনার ধূমপানের অভিজ্ঞতার কথা চিন্তা করে বলুন নেভি স্পেশাল ফিল্টার /
          নেভি সেঞ্চুরি (যে ভ্যারিয়েন্ট ট্রায়েল করেছিলো সেটা উল্লেখ করতে হবে)
          সিগারেট ব্র্যান্ডের কোন কোন দিক আপনার ভালো লেগেছে?
        </h6>
        <Checkbox.Group style={{ width: "100%" }} onChange={q7value}>
            <Col span={8}>
              <Checkbox value="There is more smoke than other cigarettes">অন্যান্য সিগারেটের তুলনায় বেশি ধোঁয়া হয়</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Can be easily pulled">সহজে টানা যায়</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Video">ভিডিও</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Ship game at sea">সমুদ্রে জাহাজের খেলা</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Use of representatives">প্রতিনিধির ব্যাবহার</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Lighter">লাইটার</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="In plastic sashe">প্লাস্টিক স্যাসে</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Box with lighter with 40 stick cigarettes">4০ শলাকা সিগারেট এর সাথে লাইটারসহ বক্স</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="The filter is strong">ফিল্টারটি শক্ত/মজবুত</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="It does not hurt the throat when pulled">টানার সময় গলায় লাগেনা / গলা জ্বলেনা</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Cigarettes can be smoked for a long time">লম্বা সময় ধরে সিগারেট টানা যায়</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="I like the cigarette">সিগারেটটা স্বাদ ভালো লেগেছে</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="I like the smell">ঘ্রান ভালো লেগেছে</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Liked the pack design">প্যাক ডিজাইনটি পছন্দ হয়েছে</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Liked the stick design">স্টিক ডিজাইনটি পছন্দ হয়েছে</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="That tastes the same">সেই একই স্বাদ</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Habits">অভ্যাস</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="New Century format">নতুন সেঞ্চুরি ফরম্যাট</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Easily shared">সহজে শেয়ার করা যায়</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Others">অন্যান্য</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Didn't like anything special">বিশেষ কিছু পছন্দ হয়নি</Checkbox>
            </Col>
        </Checkbox.Group>
      </div>
      <div style={{ display: q7.length>0 ? "block" : "none" }} className="mt-2">
        <h6>
          8.আপনার ধূমপানের অভিজ্ঞতার কথা চিন্তা করে বলুন নেভি স্পেশাল ফিল্টার /
          নেভি সেঞ্চুরি (যে ভ্যারিয়েন্ট ট্রায়েল করেছিলো সেটা উল্লেখ করতে হবে)
          সিগারেট ব্র্যান্ডের কোন কোন দিক আপনার খারাপ লেগেছে?
        </h6>
        <Checkbox.Group style={{ width: "100%" }} onChange={q8value}>
            <Col span={8}>
              <Checkbox value="The amount of smoke">ধোঁয়ার পরিমান</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Not easily pulled">সহজে টানা যায় না</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="The filter becomes dumped">ফিল্টার ড্যাম্প হয়ে যায়</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="When pulling it hurts the throat">টানার সময় গলায় লাগে / গলা জ্বলে</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Cigarettes burn out quickly">সিগারেট দ্রুত জ্বলে শেষ হয়ে যায়</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Didn't like the taste">স্বাদ ভালো লাগেনি</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Didn't like the stick design">স্টিক ডিজাইন ভালো লাগেনি</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Didn't like the new century format">নতুন সেঞ্চুরি ফরম্যাট ভালো লাগেনি</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="There is no bigger end">বেশি বড় শেষ হয় না</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="The taste has changed">স্বাদ পরিবর্তন হয়েছে</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Didn't like the taste">স্বাদ পছন্দ হয়নি</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Didn't like the smell">ঘ্রান ভালো লাগেনি</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Much stricter">অনেক বেশি কড়া</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Others">অন্যান্য</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Didn't dislike anything special">বিশেষ কিছু অপছন্দ হয়নি</Checkbox>
            </Col>
        </Checkbox.Group>
      </div>
      {/* Final Question */}
      <div
        style={{
          display:
            q2 === "no" ||
            q2 === "busy" ||
            q3 === "-18" ||
            q4 === "no" ||
            q5 === "no" ||
            q8.length>0
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h4>সমাপ্তি কথাঃ ধন্যবাদ স্যার, আপনার মূল্যবান সময় দেয়ার জন্য।</h4>
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyBody;
