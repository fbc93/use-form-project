'use client'
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import SwiperComponent from "./components/swiper";

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [qty, setQty] = useState(1);
  const price = 599;
  const total = price * qty;
  const result = { price: 0, qty: 0, total: 0 };

  const handleFormat = (total: number) => {
    const totalRegex = /\B(?=(\d{3})+(?!\d))/g;
    return total.toString().replace(totalRegex, ",");
  }

  const onClickIncrease = () => {
    setQty(prevQty => prevQty + 1)
  }

  const onClickDecrease = () => {
    if (qty > 1) {
      setQty(prevQty => prevQty - 1)
    }
  }

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onClickBuyProduct = () => {
    result.price = price;
    result.qty = qty;
    result.total = total;
    console.log(result);
  }

  return (
    <main>
      <section>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* User Name */}
          <fieldset className={`name ${errors.userName ? "error" : ""}`}>
            <label htmlFor="userName">1. Name : </label>
            <input
              {...register('userName', {
                required: true,
              })}
              id="userName"
              type="text"
            />
          </fieldset>

          {/* User Email */}
          <fieldset className={`email ${errors.userEmail ? "error" : ""}`}>
            <label htmlFor="userEmail">2. Email : </label>
            <input
              {...register('userEmail', {
                required: true,
              })}
              id="userEmail"
              type="email"
            />
          </fieldset>

          {/* User Agreement */}
          <fieldset className={`agree ${errors.userAgree ? "error" : ""}`}>
            <input
              {...register('userAgree', {
                required: true,
              })}
              id="userAgree"
              type="checkbox"
            />
            <label htmlFor="userAgree"></label>
            <p className="agree-text">어쩌고 주절주절 동의에 체크하시오.</p>
          </fieldset>

          {/* Not Required */}
          <fieldset>
            <label htmlFor="userPhone">4. Phone Number : </label>
            <input
              {...register('userPhone', {
                required: false,
              })}
              id="userPhone"
              type="text"
            />
          </fieldset>

          {/* Submit */}
          <button type="submit">SUBMIT</button>
        </form>
      </section>

      <section>
        <h1>Product</h1>
        <div className="order-container">
          <div className="price">
            <span>Price : </span>
            <span>{`${price} USD`}</span>
          </div>
          <div className="qty-container">
            <span>Qty : </span>
            <div className="btn-container">
              <span className="minus" onClick={onClickDecrease}>-</span>
              <span className="value">{qty}</span>
              <span className="plus" onClick={onClickIncrease}>+</span>
            </div>
            <div className="total">{`${handleFormat(total)} USD`}</div>
          </div>
        </div>
        <button onClick={onClickBuyProduct}>Buy NOW</button>
      </section>

      <section>
        <h1>Fixed Bottom Button</h1>
        <h1>{`${handleFormat(total)} USD`}</h1>
        <button onClick={onClickBuyProduct}>Buy NOW</button>
      </section>

      <section>
        <SwiperComponent />
      </section>
    </main>
  )
}
