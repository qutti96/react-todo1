import { useState } from "react"
import './index.css'

export const App = () =>{
  // todoリスト
  const [todos, setTodos] = useState(
    [
      {id: 1, title: 'todoリストに着手'},
      {id: 2, title: 'todoのタスクを洗い出す'}
    ]
  )
  const [todoTitle, setTodoTitle] = useState('')
  const [todoId, setTodoID] = useState(todos.length + 1)

  const setTitle = (e) => setTodoTitle(e.target.value)
  const addTodos = () => {
    setTodos([...todos, {id: todoId , title: todoTitle}])
    setTodoID(todoId+1)
    setTodoTitle('')
  }
// ・配列todosに、idとタイトルをもつ新しいtodoのオブジェクトを追加
// ・次回todoを再び作成する時にidが被らないようにidのstateを更新

//関数に削除対象のtodoが渡っているか確認しよう
//既存のtodosにfilterメソッドを使って、
//削除対象以外のtodoを要素としてもつ配列を作成します
//そして、その配列を新たにtodosにセットします
  const deleteTodos = (targetTodo) =>{
    console.log(targetTodo)
    setTodos(todos.filter((todo) => todo !== targetTodo))
  }
  return(
    <>
        <div class="px-5 py-12 lg:px-20">
        <div class="w-full max-w-3xl md:w-auto px-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div class="mt-8">
                <div class="mt-6">
                  <h1 className="font-bold mb-4 text-3xl text-center">Todo アプリ</h1>
                    {/* <form action="#" method="POST" class="space-y-6"> */}
                      <div class="w-full mx-auto">
                        <h2 className="text-2xl font-bold mb-2">todoリスト新規作成</h2>
                        <div className="flex items-center flex-wrap">
                          <input type="text" name="" id="" label="新しいタイトル" className="w-2/5 px-5 py-3 mr-4 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                          <div>
                            <button className="w-50 px-10 py-4  mr-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">編集を保存</button>
                            <button className="w-50 px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">キャンセル</button>
                          </div>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                          <input type="text" name="" id="" label="タイトル" value={todoTitle} onChange={setTitle} className="block w-2/5 px-5 py-3 mr-4 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                          <button onClick={addTodos} className="w-50 px-10 py-4  mr-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-400 rounded-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">todo作成！</button>
                        </div>



                        <h2 className="text-2xl font-bold mt-4 mb-4">作成したtodo リスト</h2>
                        <ul className="">
                          {todos.map((todo) =>
                          <li key={todo.id} className="flex items-center flex-wrap w-full mb-4">
                            <span className="block mr-4">{todo.title}</span>
                            <button className="w-50 px-10 py-4  mr-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">totoを編集</button>
                            <button onClick={() => deleteTodos(todo)} className="w-50 px-10 py-4  mr-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-400 rounded-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">todo削除！</button>
                            </li>)}
                        </ul>

                        {/* <div>
                          <label for="email" class="block text-sm font-medium text-neutral-600"> Email address </label>
                          <div class="mt-1">
                              <input id="email" name="email" type="email" autocomplete="email" required="" placeholder="Your Email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                          </div>
                        </div>

                        <div class="space-y-1">
                            <label for="password" class="block text-sm font-medium text-neutral-600"> Password </label>
                            <div class="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password" required="" placeholder="Your Password" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div> */}

                      </div>
                        {/* <div>
                            <label for="email" class="block text-sm font-medium text-neutral-600"> Message </label>
                            <textarea class="block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none autoexpand" id="description" type="text" name="description" placeholder="Message..." required=""></textarea>
                        </div> */}

                        {/* <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500" />
                                <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember me </label>
                            </div>
                            <div class="text-sm">
                                <a href="#" class="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </a>
                            </div>
                        </div> */}


                        {/* <div>
                            <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign in</button>
                        </div> */}


                    {/* </form> */}
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div>









    </>

  )
}
