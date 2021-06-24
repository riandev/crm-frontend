import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "antd/dist/antd.css";
import { Checkbox } from "antd";

const FinalUpdateQc = ({ ansData }) => {
  console.log(ansData);
  const [q7QcUpdate, setQ7QcUpdate] = useState([]);
  const [q8QcUpdate, setQ8QcUpdate] = useState([]);
  const [status, setStatus] = useState(false);
  const id = ansData._id;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const q7Update = (checkbox7) => {
    setQ7QcUpdate(checkbox7);
  };
  const q8Update = (checkbox8) => {
    setQ8QcUpdate(checkbox8);
  };
  const onSubmit = (data) => {
    data.answer7 = q7QcUpdate;
    data.answer8 = q8QcUpdate;
    console.log(data);
    fetch(`http://localhost:5000/finalUpdate/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((output) => setStatus(output));
  };

  return (
    <div>
      <h3>Update Survey:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity1">
            <Form.Label>
              <b>Question 1</b>
            </Form.Label>
            <Form.Control
              {...register("answer1")}
              as="select"
              defaultValue={ansData.answer1}
            >
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity2">
            <Form.Label>
              <b>Question 2</b>
            </Form.Label>
            <Form.Control
              {...register("answer2")}
              as="select"
              defaultValue={ansData.answer2}
            >
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity3">
            <Form.Label>
              <b>Question 3</b>
            </Form.Label>
            <Form.Control
              {...register("answer3")}
              as="select"
              defaultValue={ansData.answer3}
            >
              <option>-18</option>
              <option>18-24</option>
              <option>25-33</option>
              <option>34-50</option>
              <option>50+</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity4">
            <Form.Label>
              <b>Question 4</b>
            </Form.Label>
            <Form.Control
              {...register("answer4")}
              as="select"
              defaultValue={ansData.answer4}
            >
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity5">
            <Form.Label>
              <b>Question 4.1</b>
            </Form.Label>
            <Form.Control
              {...register("answer4dot1")}
              as="select"
              defaultValue={ansData.answer4dot1}
            >
              <option>Navy Special Filter</option>
              <option>Navy Century</option>
              <option>star</option>
              <option>Star Next</option>
              <option>royals</option>
              <option>others</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity6">
            <Form.Label>
              <b>Question 5</b>
            </Form.Label>
            <Form.Control
              {...register("answer5")}
              as="select"
              defaultValue={ansData.answer5}
            >
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity7">
            <Form.Label>
              <b>Question 5.1</b>
            </Form.Label>
            <Form.Control
              {...register("answer5dot1")}
              as="select"
              defaultValue={ansData.answer5dot1}
            >
              <option>brandmsg</option>
              <option>1solaka</option>
              <option>2solaka</option>
              <option>3solaka</option>
              <option>4solaka</option>
              <option>5solaka</option>
              <option>2packet</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity8">
            <Form.Label>
              <b>Question 5.2</b>
            </Form.Label>
            <Form.Control
              {...register("answer5dot2")}
              as="select"
              defaultValue={ansData.answer5dot2}
            >
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity9">
            <Form.Label>
              <b>Question 5.3</b>
            </Form.Label>
            <Form.Control
              {...register("answer5dot3")}
              as="select"
              defaultValue={ansData.answer5dot3}
            >
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity10">
            <Form.Label>
              <b>Question 6</b>
            </Form.Label>
            <Form.Control
              {...register("answer6")}
              as="select"
              defaultValue={ansData.answer6}
            >
              <option>1</option>
              <option>2</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity11">
            <Form.Label>
              <b>Question 7</b>
            </Form.Label>
            <Checkbox.Group style={{ width: "100%" }} onChange={q7Update}>
              <Col span={8}>
                <Checkbox value="There is more smoke than other cigarettes">
                  অন্যান্য সিগারেটের তুলনায় বেশি ধোঁয়া হয়
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Can be easily pulled">সহজে টানা যায়</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Video">ভিডিও</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Ship game at sea">
                  সমুদ্রে জাহাজের খেলা
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Use of representatives">
                  প্রতিনিধির ব্যাবহার
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Lighter">লাইটার</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="In plastic sashe">প্লাস্টিক স্যাসে</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Box with lighter with 40 stick cigarettes">
                  4০ শলাকা সিগারেট এর সাথে লাইটারসহ বক্স
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="The filter is strong">
                  ফিল্টারটি শক্ত/মজবুত
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="It does not hurt the throat when pulled">
                  টানার সময় গলায় লাগেনা / গলা জ্বলেনা
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Cigarettes can be smoked for a long time">
                  লম্বা সময় ধরে সিগারেট টানা যায়
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="I like the cigarette">
                  সিগারেটটা স্বাদ ভালো লেগেছে
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="I like the smell">ঘ্রান ভালো লেগেছে</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Liked the pack design">
                  প্যাক ডিজাইনটি পছন্দ হয়েছে
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Liked the stick design">
                  স্টিক ডিজাইনটি পছন্দ হয়েছে
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="That tastes the same">সেই একই স্বাদ</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Habits">অভ্যাস</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="New Century format">
                  নতুন সেঞ্চুরি ফরম্যাট
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Easily shared">সহজে শেয়ার করা যায়</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Others">অন্যান্য</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Didn't like anything special">
                  বিশেষ কিছু পছন্দ হয়নি
                </Checkbox>
              </Col>
            </Checkbox.Group>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity12">
            <Form.Label>
              <b>Question 8</b>
            </Form.Label>
            <Checkbox.Group style={{ width: "100%" }} onChange={q8Update}>
              <Col span={8}>
                <Checkbox value="The amount of smoke">ধোঁয়ার পরিমান</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Not easily pulled">সহজে টানা যায় না</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="The filter becomes dumped">
                  ফিল্টার ড্যাম্প হয়ে যায়
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="When pulling it hurts the throat">
                  টানার সময় গলায় লাগে / গলা জ্বলে
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Cigarettes burn out quickly">
                  সিগারেট দ্রুত জ্বলে শেষ হয়ে যায়
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Didn't like the taste">
                  স্বাদ ভালো লাগেনি
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Didn't like the stick design">
                  স্টিক ডিজাইন ভালো লাগেনি
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Didn't like the new century format">
                  নতুন সেঞ্চুরি ফরম্যাট ভালো লাগেনি
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="There is no bigger end">
                  বেশি বড় শেষ হয় না
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="The taste has changed">
                  স্বাদ পরিবর্তন হয়েছে
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Didn't like the taste">
                  স্বাদ পছন্দ হয়নি
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Didn't like the smell">
                  ঘ্রান ভালো লাগেনি
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Much stricter">অনেক বেশি কড়া</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Others">অন্যান্য</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Didn't dislike anything special">
                  বিশেষ কিছু অপছন্দ হয়নি
                </Checkbox>
              </Col>
            </Checkbox.Group>
          </Form.Group>
        </Form.Row>
        <input className="btn btn-danger" type="submit" />
      </form>
      <div>{status === true && alert("Data Updated Successfully")}</div>
    </div>
  );
};

export default FinalUpdateQc;
