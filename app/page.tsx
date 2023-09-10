'use client'
import useMoveScroll from "@/lib/useMoveScroll";
import { useScrollDirection } from "@/lib/useScrollDirection";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form"
import Container from "./components/container";
import SwiperComponent from "./components/swiper";

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>();
  const { scrollBuyBtn } = useScrollDirection();
  const [qty, setQty] = useState(1);

  const price = 599;
  const total = price * qty;

  const sections = {
    0: useMoveScroll('Main'),
    1: useMoveScroll('Contact'),
    2: useMoveScroll('Product'),
    3: useMoveScroll('Bottom'),
    4: useMoveScroll('Swiper'),
    length: 5,
  }

  const onClickIncrease = () => {
    setQty(prevQty => prevQty + 1)
  }

  const onClickDecrease = () => {
    if (qty > 1) {
      setQty(prevQty => prevQty - 1)
    }
  }

  const onClickBuyProduct = () => {
    const result = { qty: 0, total: 0 };
    result.qty = qty;
    result.total = total;
    console.log(result);
  }

  const handleFormat = (total: number) => {
    //천단위 콤마 format
    const totalRegex = /\B(?=(\d{3})+(?!\d))/g;
    return total.toString().replace(totalRegex, ",");
  }

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container sections={sections}>
      <main ref={sections[0].element}>
        <section ref={sections[1].element}>
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

        <section ref={sections[2].element}>
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

        <section ref={sections[3].element} className={`scroll-buy-btn ${scrollBuyBtn}`}>
          <h1>Mobile : Fixed Bottom Button</h1>
          <h1>{`${handleFormat(total)} USD`}</h1>
          <button onClick={onClickBuyProduct}>Buy NOW</button>
        </section>

        <section ref={sections[4].element}>
          <h1>Swiper</h1>
          <SwiperComponent />
        </section>

        <button onClick={sections[0].onMoveToElement}>UP</button>
      </main>
    </Container>

  )
}
