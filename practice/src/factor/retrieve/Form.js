import React, { Component } from "react";
import imgURL from './timg.jpg';
import "./Form.css"

class Form extends Component {

    render() {
        return(
            <div id="jpyw_form">

                <header id="header1">
                    <form action="#" id="jpselect">
                        <span>金票状态：</span>
                        <select>
                            <option value ="请选择">请选择</option>
                            <option value ="申请待初审">申请待初审</option>
                            <option value ="申请待复审">申请待复审</option>
                            <option value="金票待接收">金票待接收</option>
                            <option value="申请已驳回">申请已驳回</option>
                            <option value ="申请待初审">申请成功</option>
                            <option value ="申请待复审">融资待受理</option>
                            <option value="金票待接收">融资已受理</option>
                            <option value="申请已驳回">融资已驳回</option>
                            <option value="金票待接收">放款待接收</option>
                            <option value="申请已驳回">放款已驳回</option>
                            <option value ="申请待初审">融资成功</option>
                            <option value ="申请待复审">转让待签收</option>
                            <option value="金票待接收">转让已驳回</option>
                            <option value="申请已驳回">转让已签收</option>
                        </select>
                        <span>开票企业：</span>
                        <select>
                            <option value ="请选择">请选择</option>
                        </select>
                        <span>开票时间：</span>
                        <input type="date" value="2019-09-24"/>
                        <span>到期时间：</span>
                        <input type="date" value="2019-09-24"/>
                        <span>金票类型：</span>
                        <select>
                            <option value ="请选择">请选择</option>
                        </select>
                    </form>
                    <form action="#" id="jpsearch1">
                        <img src={imgURL} id='icon1'/>
                        <input type="search" placeholder="输入金票编号" id="jpvalue1"/>
                    </form>
                    <button type="button" id="apply1">查询</button>
                </header>

                    <table class="jpyw_table">
                        <thead>
                            <tr>
                                <th>金票编号</th>
                                <th>开票企业</th>
                                <th>到期时间</th>
                                <th>金额</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>11223948101329424211102</td>
                                <td>xxx建设企业</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td><a href="#">详情</a></td>
                            </tr>
                            <tr>
                                <td>11223948101329424211103</td>
                                <td>xxx建设企业</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td><a href="#">详情</a></td>
                            </tr>
                            <tr>
                                <td>11223948101329424211104</td>
                                <td>xxx建设企业</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td><a href="#">详情</a></td>
                            </tr>
                            <tr>
                                <td>11223948101329424211105</td>
                                <td>xxx建设企业</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td><a href="#">详情</a></td>
                            </tr>
                        </tbody>
                    </table>

                <div class="bottom">
                    <div class="pagenum">
                        <span>共</span>
                        <span class="total">100</span>
                        <span>条</span>
                    </div>
                    <ul class="page"> 
                        <li><a href="#">&lt;</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li class="symbol">...</li>
                        <li><a href="#">50</a></li>
                        <li><a href="#">&gt;</a></li>
                    </ul>
                    <span class="word">前往</span>
                    <input type="search" placeholder="8" class="search_page"/>
                </div>
            </div>
        );
    }

}

export default Form;