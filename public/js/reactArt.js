var ProductoBBComponent = React.createClass({
    render: function (props) {
        return (
            <div class="col s12 card artCard">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={this.props.imgC} />
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">' + t + '<i class="material-icons right">more_vert</i></span>
                    <p><a href={this.props.url}>Comprar {this.props.price}</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{this.props.title}<i class="material-icons right">close</i></span>
                    <p> {this.props.description} </p>
                </div>
            </div>
        );
    }
});

function productoBBReact(producto, element) {
    ReactDOM.render(<ProductoBBComponent producto={producto} />, element);
}