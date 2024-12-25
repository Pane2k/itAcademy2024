function Accum(img, title, price, oldPrice, disclamer, available, characteristics) {
    this.img = img;
    this.title = title;
    this.price = price;

    this.oldPrice = oldPrice;
    this.disclamer = disclamer;
    this.available = available;
    this.characteristics = characteristics
}

function AccumCharacteristics(capacity, starting, polarity, terminals, dimensions, manufacturer, weight) {
    this.capacity = capacity;
    this.starting = starting;
    this.polarity = polarity;
    this.terminals = terminals;
    this.dimensions = dimensions;
    this.manufacturer = manufacturer;
    this.weight = weight;
}
