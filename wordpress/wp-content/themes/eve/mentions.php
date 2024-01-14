
<?php 

/*
Template Name: Mentions Légales
*/

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
    <?php wp_head(); ?>
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri() . '/style.css'; ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-hk8Pml0E+P2Ud6Zs7FeVfsf5A/9f2KRHCeRRDZgjFX8Xi8aQ9gXO5qAqFYj1lAM6JXXu2I3A+etDgdu0+1lcPQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body <?php body_class(); ?>>
    
    <?php wp_body_open(); ?>

        <div class="divlegal">
            <h1 class="h1legal">Mentions légales</h1>
            <a href="http://evekinesio.fr">Retour au site</a>  
        </div>


        <p class="textlegal">Eve GIRARDOT Kinésiologie <br>
        2, rue de Beaulieu 17138 PUILBOREAU <br>
        Par téléphone : +33666993837<br>
        Par email : eve.girardot@gmail.com<br>
        <br>
        Entrepreneur individuel <br>
        SIREN : 980218523</p>


        <h3 class="textlegal">1. Prix</h3>
        <p class="textlegal">Les prix de mes services sont indiqués en euros toutes taxes comprises (TVA et autres taxes applicables au jour de la commande), Sauf indication contraire et hors frais de traitement et d’expédition.<br>
        La société Eve GIRARDOT Kinésiologie se réserve le droit de modifier ses prix à tout moment, mais le produit sera facturé sur la base du tarif en vigueur au moment de la validation de la commande et sous réserve de disponibilité.</p>

        <h3 class="textlegal">2. Obligation de résultat</h3>
        <p class="textlegal">La société Eve GIRARDOT Kinésiologie ne dispose d’aucune obligation de résultats à la suite de la réalisation d’une de ses prestations. Elle s’engage cependant à mobiliser toutes les ressources dont elle dispose pour accomplir la prestation promise, sans garantie du résultat.</p>

        <h3 class="textlegal">3. Hébergement</h3>
        <p class="textlegal">Le Site est hébergé par la société Hostinger via WordPress<br>
        Gestionnaire du site : Tatiana STAHLI <br>
        Directeur et responsable de la publication / rédaction : Eve GIRARDOT<br>
        </p>

        <h3 class="textlegal">4. Propriété Intellectuelle</h3>
        <p class="textlegal">Les informations et données qui figurent sur ce site sont protégées par les dispositions légales relatives aux droits de propriété intellectuelle. Toute représentation, reproduction, utilisation, adaptation ou modification de ces informations est prohibée sans autorisation, incluant les documents iconographiques et photographiques. Toute reproduction, totale ou partielle, de ce site ou d’un ou de plusieurs de ses composants, par quelque procédé que ce soit, sans autorisation écrite de Eve GIRARDOT est totalement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle française.</p>

        <h3 class="textlegal">5. Respect de la vie privée</h3>
        <p class="textlegal">Les informations que vous communiquez via les formulaires qui peuvent être présents sur ce site permettent de répondre à vos demandes. Vous disposez, conformément à la loi française n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, d’un droit de rectification, de modification et de suppression des données qui vous concernent. Vous pouvez exercer vos droits de rectification, de modification et de suppression en nous contactant par courriel ou par téléphone.</p>

        <h3 class="textlegal">6. Droit applicable en cas de litiges</h3>
        <p class="textlegal">La langue du présent contrat est la langue française. Les présentes conditions de vente sont soumises à la loi française. En cas de litige, les tribunaux français seront les seuls compétents.</p>

        <footer class="site__footer">
            <a class="return-button" href="http://evekinesio.fr">Retourner sur le site</a>
            <p class="menu-bas-de-page">&copy;2023 - eve.kinesio - Tous droits réservés</p>
        </footer>

<?php wp_footer(); ?>
