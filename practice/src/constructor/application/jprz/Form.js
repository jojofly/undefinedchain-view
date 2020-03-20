import React, { Component } from "react";
import "../../../right/Form.css"

class Form extends Component {

    render() {
        return(
            <div id="form">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td className="t-left">申请金额：</td>
                                <td className="t-right"><input type="text" placeholder="元" /></td>
                            </tr>
                            <tr>
                                <td className="t-left">收款账号：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left">开户银行：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left">操作人：</td>
                                <td className="t-right">张三</td>
                            </tr>
                            <tr>
                                <td className="t-left">备注：</td>
                                <td className="t-right"><textarea id="remark"></textarea></td>
                            </tr>
                            <tr>
                                <td className="t-left"></td>
                                <td className="bottom">
                                    <input type="button" value="返回" id="back" />
                                    <input type="submit" value="提交" id="submit" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

}

export default Form;