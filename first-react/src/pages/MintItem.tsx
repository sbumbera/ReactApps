// setup ipfs to host nft data

// import { ethers } from 'ethers'
// import { useState } from 'react'
// import Web3Modal from 'web3modal'
// import { create as ipfsHttpClient } from 'ipfs-http-client'
// import { useRouter } from 'next/router'

// import { nftaddress, nftmarketaddress } from '../config'
// import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
// import MWMarket from '../artifacts/contracts/MWMarket.sol/MWMarket.json'
// import React from 'react'

// const client = ipfsHttpClient({url:'https://ipfs.infura.io:5001/api/v0'})

const MintItem = () => {
  // const [fileUrl, setFileUrl] = useState<string>();
  // const [formInput, updateFormInput] = useState({
  //     price: '',
  //     name: '',
  //     description: ''
  // })
  // const router = useRouter()

  // // when files are updated in form add NFT images
  // async function onChange(e: any) {

  //     const file = e.target.files[0]
  //     try {
  //     const added = await client.add(
  //         file, {
  //             progress: (prog) => console.log(`received: ${prog}`)
  //         }
  //     )
  //     const url = `https://ipfs.infura.io/ipfs/${added.path}`
  //     setFileUrl(url)
  //     } catch (error) {
  //         console.log('Upload failed')
  //     }
  // } // end onChange

  // async function createMarket() {
  //     const {name, description, price} = formInput
  //     if(!name || !description || !price || !fileUrl) return

  //     // upload to IPFS
  //     const data = JSON.stringify({
  //         name,
  //         description,
  //         image: fileUrl
  //     })
  //     try {
  //         const added = await client.add(data)
  //         const url = `https://ipfs.infura.io/ipfs/${added.path}`

  //         createSale(url)
  //         } catch (error) {
  //             console.log('Upload failed')
  //         }
  // } // end createMarket

  // async function createSale(url: any) {
  //     const web3Modal = new Web3Modal()
  //     const connection = await web3Modal.connect()
  //     const provider = new ethers.providers.Web3Provider(connection)
  //     const signer = provider.getSigner()

  //     //create token
  //     let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
  //     let transaction = await contract.mintToken(url)
  //     let tx = await transaction.wait()
  //     let event = tx.events[0]
  //     let value = event.args[2]
  //     let tokenId = value.toNumber()
  //     const price = ethers.utils.parseUnits(formInput.price, 'ether')

  //     // list for sale on marketplace
  //     contract = new ethers.Contract(nftmarketaddress, MWMarket.abi, signer)
  //     let listingPrice = await contract.getListingPrice()
  //     listingPrice = listingPrice.toString()
  //     transaction = await contract.makeMarketItem(nftaddress, tokenId, price, {value: listingPrice})
  //     await transaction.wait()
  //     router.push('/')
  // } // end createSale

  return (
    <div className="py-20 h-screen bg-gray-300 px-2">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full">
            <div className="p-4 border-b-2">
              {" "}
              <span className="text-lg font-bold text-gray-600">
                Add documents
              </span>{" "}
            </div>
            <div className="p-3">
              <div className="mb-2">
                {" "}
                <span className="text-sm">Title</span>{" "}
                <input
                  type="text"
                  className="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"
                />{" "}
              </div>
              <div className="mb-2">
                {" "}
                <span>Attachments</span>
                <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                  <div className="absolute">
                    <div className="flex flex-col items-center ">
                      {" "}
                      <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>{" "}
                      <span className="block text-gray-400 font-normal">
                        Attach you files here
                      </span>{" "}
                      <span className="block text-gray-400 font-normal">
                        or
                      </span>{" "}
                      <span className="block text-blue-400 font-normal">
                        Browse files
                      </span>{" "}
                    </div>
                  </div>{" "}
                  <input
                    type="file"
                    className="h-full w-full opacity-0"
                    name=""
                  />
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  {" "}
                  <span>Accepted file type:.doc only</span>{" "}
                  <span className="flex items-center ">
                    <i className="fa fa-lock mr-1"></i> secure
                  </span>{" "}
                </div>
              </div>
              <div className="mt-3 text-center pb-3">
                {" "}
                <button className="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700">
                  Create
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; // End mintItem

export default MintItem;
