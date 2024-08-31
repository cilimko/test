import React from 'react';
import ReactDOM from 'react-dom/client';

export default function HelloReact() {
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </table>
        </div>
    );
}
const container = document.getElementById('hello-react');
const root = ReactDOM.createRoot(container);
root.render(<HelloReact/>);
/*if (document.getElementById('hello-react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
}*/