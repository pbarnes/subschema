var React = require('react');
var SchemaDoc = React.createClass({
    render(){
        return (<div>
            <h3>Schema</h3>
            <fieldset>
                <legend></legend>
                <p className="lead">
                    The subschema schema was borrowed from backbone-forms. It seems reasonable enough, though I don't
                    guarantee compatibilty.
                </p>

                <div className="panel">
                    <div className="panel-heading">
                        <h3>Writing Schema</h3>
                    </div>
                    <div className="panel-body">
                        I am going to write a doc to describe how to write schema.   If you feel like doing so, please
                        send a pull request
                    </div>
                </div>

            </fieldset>
        </div>);
    }
});
module.exports = SchemaDoc;
