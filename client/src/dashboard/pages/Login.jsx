import React, {useContext, useState} from 'react'
import { base_url } from '../config/config'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import storeContext from '../../context/storeContext'

const Login = () => {

  const navigate = useNavigate()
  const {dispatch} = useContext(storeContext)
  const [loader, setLoader] = useState(false)

  const [state, setState] = useState({
    email: "",
    password: ''
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const submit = async(e) => {
    e.preventDefault()
    try {
      setLoader(true)
      const { data } = await axios.post(`${base_url}/api/login`, state)
      setLoader(false)
      localStorage.setItem('newsToken', data.token)
      toast.success(data.message)
      dispatch({
        type: "login_success",
        payload: {
          token: data.token
        }
      })
      navigate('/dashboard')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="min-w-screen min-h-screen bg-slate-200 flex justify-center items-center px-4">
      <div className="w-full max-w-sm md:max-w-md text-slate-600 shadow-md rounded-lg">
        <div className="bg-white h-full px-6 py-8 rounded-md">
          <div className="w-full justify-center items-center flex">
            <img
              className="w-40 md:w-48 lg:w-56 max-w-full h-auto"
              src="src/assets/logo-mar.png"
              alt="logo"
            />
          </div>
          <form onSubmit={submit} className="mt-8">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <label
                  className="text-md font-medium text-gray-600"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  value={state.email}
                  required
                  onChange={inputHandle}
                  type="email"
                  placeholder="example@globalenr.com"
                  name="email"
                  id="email"
                  className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  className="text-md font-medium text-gray-600"
                  htmlFor="password"
                >
                  Mot de Passe*
                </label>
                <input
                  value={state.password}
                  required
                  onChange={inputHandle}
                  type="password"
                  placeholder="Mot de Passe"
                  name="password"
                  id="password"
                  className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                />
              </div>
              <div className="mt-4">
                <button
                  disabled={loader}
                  className="px-3 py-2 bg-[#1960a9] w-full rounded-md text-white hover:bg-[#9fc327]"
                >
                  {loader ? "Loading..." : "Login"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login