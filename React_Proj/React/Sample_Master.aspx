    <%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Sample_Master.aspx.cs"
        Inherits="React_Proj.React.Sample_Master" %>

    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title>Sample Master</title>

    
        <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="https://cdn.jsdelivr.net/npm/crypto-js@4.2.0/crypto-js.min.js"></script>
          <script src="https://cdn.tailwindcss.com"></script>
    </head>

    <body>
        <form id="form1" runat="server">

    
            <div id="root"></div>

        </form>

    
        <script type="text/babel" src="/React/Scripts/SampleMaster.jsx"></script>

    
        <script type="text/babel">
            ReactDOM.render(
                <SampleMasterWithBe />,
                document.getElementById("root")
            );
        </script>
    </body>
    </html>
