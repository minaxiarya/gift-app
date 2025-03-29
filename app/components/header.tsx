export default function Header() {
return (
    <div>
  <div className="flex items-center bg-white p-4 pb-2 justify-between">
    <h2 className="text-[#181113] text-lg font-bold leading-tight tracking-[-0.015em] flex-1">Return Gifts</h2>
    <div className="flex w-12 items-center justify-end">
      <button
        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#181113] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
      >
        <div className="text-[#181113]" data-icon="ShoppingCart" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  </div>
  <div className="pb-3">
    <div className="flex border-b border-[#e6dbde] px-4 gap-8">
      <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#181113] text-[#181113] pb-[13px] pt-4" href="#">
        <p className="text-[#181113] text-sm font-bold leading-normal tracking-[0.015em]">Home</p>
      </a>
      <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#8c5f6c] pb-[13px] pt-4" href="#">
        <p className="text-[#8c5f6c] text-sm font-bold leading-normal tracking-[0.015em]">Shop</p>
      </a>
      <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#8c5f6c] pb-[13px] pt-4" href="#">
        <p className="text-[#8c5f6c] text-sm font-bold leading-normal tracking-[0.015em]">Customize</p>
      </a>
      <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#8c5f6c] pb-[13px] pt-4" href="#">
        <p className="text-[#8c5f6c] text-sm font-bold leading-normal tracking-[0.015em]">About Us</p>
      </a>
      <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#8c5f6c] pb-[13px] pt-4" href="#">
        <p className="text-[#8c5f6c] text-sm font-bold leading-normal tracking-[0.015em]">Contact</p>
      </a>
    </div>
  </div>
</div>
  
    
  
  )
}