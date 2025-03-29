import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
    return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden">
    <Header/>
    <div><div className="h-5 bg-white"></div></div>

    <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <h2 className="text-[#181113] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Giftbox Co.</h2>
          <div className="flex w-12 items-center justify-end">
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#181113] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            >
              <div className="text-[#181113]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/fb2d8d94-df5a-4a92-8c83-5f41e5f87373.png")'
              }}
            >
              <h1
                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center"
              >
                Perfect Return Gifts for Every Celebration
              </h1>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#fa5f8d] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
              >
                <span className="truncate">Shop Now</span>
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-[#181113] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Gifts</h2>
        <div className="p-4 @container">
          <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/fb2d8d94-df5a-4a92-8c83-5f41e5f87373.png")'
              }}
            ></div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
              <p className="text-[#181113] text-lg font-bold leading-tight tracking-[-0.015em]">Ceramic Keepsake</p>
              <div className="flex items-end gap-3 justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[#8c5f6c] text-base font-normal leading-normal">
                    Hand-painted trinket dish, perfect for small keepsakes. Delicate floral patterns on pastel hues.
                  </p>
                  <p className="text-[#8c5f6c] text-base font-normal leading-normal">Hand-painted ceramic trinket dish</p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#fa5f8d] text-white text-sm font-medium leading-normal"
                >
                  <span className="truncate">Request Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 @container">
          <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/fb2d8d94-df5a-4a92-8c83-5f41e5f87373.png")'
              }}
            ></div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
              <p className="text-[#181113] text-lg font-bold leading-tight tracking-[-0.015em]">Fragrant Candles</p>
              <div className="flex items-end gap-3 justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[#8c5f6c] text-base font-normal leading-normal">
                    Soy wax candles with enchanting scents. Presented in stylish tins with minimalist designs, ideal for relaxation.
                  </p>
                  <p className="text-[#8c5f6c] text-base font-normal leading-normal">Scented soy wax candles in elegant tins</p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#fa5f8d] text-white text-sm font-medium leading-normal"
                >
                  <span className="truncate">Request Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 @container">
          <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/fb2d8d94-df5a-4a92-8c83-5f41e5f87373.png")'
              }}
            ></div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
              <p className="text-[#181113] text-lg font-bold leading-tight tracking-[-0.015em]">Chocoholic's Bliss</p>
              <div className="flex items-end gap-3 justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[#8c5f6c] text-base font-normal leading-normal">
                    Exquisite selection of gourmet chocolates. Beautifully packaged in a gold-accented box, a sweet treat for any occasion.
                  </p>
                  <p className="text-[#8c5f6c] text-base font-normal leading-normal">Gourmet chocolate assortments in a gold box</p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#fa5f8d] text-white text-sm font-medium leading-normal"
                >
                  <span className="truncate">Request Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
</div>)
}